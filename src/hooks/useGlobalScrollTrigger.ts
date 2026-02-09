import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  calculateScrollEnd,
  generateSnapPoints,
  getActiveSectionAndStep,
  calculateSectionDefinitions,
  SCROLL_CONFIG,
  type SectionDefinition,
} from "@/helpers/scroll";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GlobalScrollTriggerOptions {
  containerRef: RefObject<HTMLElement | null>;
  sectionSteps: number[]; // Array of step counts for each section
  sectionNames?: string[]; // Optional names for debugging
  onSectionChange?: (sectionIndex: number, localStep: number) => void;
  enabled?: boolean;
}

interface ScrollState {
  currentSection: number;
  currentStep: number;
  progress: number;
}

/**
 * Master hook for managing a single ScrollTrigger instance across the entire page.
 * This replaces individual section ScrollTriggers for smoother transitions.
 *
 * @example
 * ```tsx
 * const { scrollToSection, scrollState, sections } = useGlobalScrollTrigger({
 *   containerRef: mainRef,
 *   sectionSteps: [3, 5, 8, 3, 1], // HookSection=3, JourneySection=5, etc.
 *   sectionNames: ['hook', 'journey', 'quadrant', 'closure', 'cta'],
 *   onSectionChange: (sectionIndex, localStep) => {
 *     console.log(`Section ${sectionIndex}, Step ${localStep}`);
 *   }
 * });
 * ```
 */
export function useGlobalScrollTrigger({
  containerRef,
  sectionSteps,
  sectionNames,
  onSectionChange,
  enabled = true,
}: GlobalScrollTriggerOptions) {
  const scrollStateRef = useRef<ScrollState>({
    currentSection: 0,
    currentStep: 0,
    progress: 0,
  });

  const sectionsRef = useRef<SectionDefinition[]>(
    calculateSectionDefinitions(sectionSteps, sectionNames),
  );

  // Store callback in ref to avoid recreating ScrollTrigger
  const onSectionChangeRef = useRef(onSectionChange);

  // Track programmatic scrolling target to prevent conflicts
  const programmaticTargetRef = useRef<{
    section: number;
    step: number;
  } | null>(null);

  useEffect(() => {
    onSectionChangeRef.current = onSectionChange;
  }, [onSectionChange]);

  useEffect(() => {
    if (!enabled) return;

    const container = containerRef.current;
    if (!container) return;

    // Ensure the container is actually in the DOM
    if (!document.body.contains(container)) {
      console.warn("Container not in DOM yet");
      return;
    }

    const sections = sectionsRef.current;
    const totalSteps = sectionSteps.reduce((sum, steps) => sum + steps, 0);

    // ScrollTrigger.config({ ignoreMobileResize: true });

    // Enable ScrollTrigger's normalizeScroll for better mobile handling
    // Only on touch devices — on desktop the scrollbar can trigger a
    // "getComputedStyle on non-Element" crash inside _nestedScroll.
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      ScrollTrigger.normalizeScroll({
        allowNestedScroll: true,
        lockAxis: true,
        type: "touch,wheel,pointer",
      });
    }

    // Create a single ScrollTrigger for the entire page
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: calculateScrollEnd(totalSteps),
      pin: true,
      // scrub: 0.8,
      scrub: false,
      // preventOverlaps: true, // Prevent conflicts with other scroll triggers
      // fastScrollEnd: true, // Reach end state quickly when fast scrolling
      // Disable snap for now - may be causing conflicts with programmatic scrolling
      // especially in sections with special navigation logic like QuadrantSection
      // snap: {
      //   snapTo: generateSnapPoints(totalSteps),
      //   duration: { min: 0.5, max: 1.2 },
      //   delay: 0.3,
      //   ease: "power3.out",
      //   inertia: false,
      // },
      onUpdate: (self) => {
        const progress = self.progress;
        // console.log("ScrollTrigger progress:", progress);

        const { sectionIndex, localStep } = getActiveSectionAndStep(
          progress,
          sections,
        );

        // If we have a programmatic target, ignore any updates that don't match it
        if (programmaticTargetRef.current) {
          if (
            sectionIndex !== programmaticTargetRef.current.section ||
            localStep !== programmaticTargetRef.current.step
          ) {
            // Ignore this update - it's during transition to our target
            return;
          }
          // We've reached our target, clear it
          programmaticTargetRef.current = null;
        }

        // Only trigger callback if section or step changed
        if (
          scrollStateRef.current.currentSection !== sectionIndex ||
          scrollStateRef.current.currentStep !== localStep
        ) {
          scrollStateRef.current = {
            currentSection: sectionIndex,
            currentStep: localStep,
            progress,
          };

          onSectionChangeRef.current?.(sectionIndex, localStep);
        }
      },
    });

    return () => {
      //   console.log("Killing ScrollTrigger");
      if (trigger) {
        trigger.kill();
      }
      // Kill all ScrollTriggers associated with this container
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) {
          st.kill();
        }
      });

      try {
        if (isTouchDevice) {
          ScrollTrigger.normalizeScroll(false);
        }
      } catch (error) {
        // Silently handle - element may already be gone
      }
    };
  }, [containerRef, enabled]);

  /**
   * Programmatically scroll to a specific section and step
   */
  const scrollToSection = (sectionIndex: number, localStep: number = 0) => {
    const sections = sectionsRef.current;
    if (sectionIndex < 0 || sectionIndex >= sections.length) return;

    const section = sections[sectionIndex];
    const clampedStep = Math.max(0, Math.min(localStep, section.steps - 1));

    const totalSteps = sectionSteps.reduce((sum, steps) => sum + steps, 0);
    const globalStep = section.startStep + clampedStep;
    const targetProgress = globalStep / totalSteps;

    // Ensure container exists before finding trigger
    if (!containerRef.current) {
      console.warn("Container ref not available for scrollToSection");
      return;
    }

    const trigger = ScrollTrigger.getAll().find(
      (t) => t.trigger === containerRef.current,
    );

    if (trigger) {
      const scrollPosition =
        trigger.start + (trigger.end - trigger.start) * targetProgress;

      // Set the target to filter out intermediate scroll updates
      programmaticTargetRef.current = {
        section: sectionIndex,
        step: clampedStep,
      };

      // Update state immediately for instant visual feedback
      scrollStateRef.current = {
        currentSection: sectionIndex,
        currentStep: clampedStep,
        progress: targetProgress,
      };
      onSectionChangeRef.current?.(sectionIndex, clampedStep);

      gsap.to(window, {
        scrollTo: scrollPosition,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          // Clear the target after a small delay to let scroll settle
          setTimeout(() => {
            programmaticTargetRef.current = null;
          }, 50);
        },
      });
    }
  };

  return {
    scrollToSection,
    sections: sectionsRef.current,
    scrollState: scrollStateRef.current,
  };
}
