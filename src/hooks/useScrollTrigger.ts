import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  calculateScrollEnd,
  getSnapConfig,
  getActiveStep,
  fadeOut,
  fadeIn,
} from "@/helpers/scroll";

interface UseScrollTriggerOptions {
  sectionRef: RefObject<HTMLElement | null>;
  steps: number;
  onStepChange?: (step: number) => void;
  enabled?: boolean;
}

/**
 * Custom hook to set up a ScrollTrigger instance with common configuration
 * Handles pinning, snapping, and cleanup automatically
 */
export function useScrollTrigger({
  sectionRef,
  steps,
  onStepChange,
  enabled = true,
}: UseScrollTriggerOptions) {
  useEffect(() => {
    if (!enabled) return;

    const section = sectionRef.current;
    if (!section) return;

    let currentIndex = 0;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: calculateScrollEnd(steps),
      pin: true,
      snap: getSnapConfig(steps),
      onUpdate: (self) => {
        const activeStep = getActiveStep(self.progress, steps);
        if (currentIndex !== activeStep) {
          currentIndex = activeStep;
          onStepChange?.(activeStep);
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [sectionRef, steps, onStepChange, enabled]);
}

interface UseElementTransitionOptions {
  elements: RefObject<HTMLElement | null>[];
  currentIndex: number;
  hideAllExcept?: number[];
}

/**
 * Custom hook to manage element transitions with fade in/out animations
 * Handles killing ongoing animations and showing/hiding elements
 */
export function useElementTransition({
  elements,
  currentIndex,
  hideAllExcept = [],
}: UseElementTransitionOptions) {
  const elementRefs = elements.map((ref) => ref.current).filter(Boolean);

  return {
    transitionTo: (newIndex: number, oldIndex: number = currentIndex) => {
      if (newIndex === oldIndex) return;

      // Kill all ongoing animations first
      elementRefs.forEach((el) => gsap.killTweensOf(el));

      const oldElement = elementRefs[oldIndex];
      const newElement = elementRefs[newIndex];

      // Hide all elements immediately except the ones transitioning
      elementRefs.forEach((el, i) => {
        if (i !== oldIndex && i !== newIndex && !hideAllExcept.includes(i)) {
          gsap.set(el, { autoAlpha: 0 });
        }
      });

      // Fade out old, fade in new
      if (oldElement) fadeOut(oldElement);
      if (newElement) fadeIn(newElement);
    },
  };
}

interface InitialVisibilityConfig {
  visible?: number[];
  hidden?: number[];
}

/**
 * Set initial visibility state for elements
 */
export function setInitialVisibility(
  elements: RefObject<HTMLElement | null>[],
  config: InitialVisibilityConfig
) {
  const { visible = [0], hidden = [] } = config;

  elements.forEach((ref, index) => {
    const el = ref.current;
    if (!el) return;

    if (visible.includes(index)) {
      gsap.set(el, { autoAlpha: 1, y: 0 });
    } else if (hidden.includes(index) || hidden.length === 0) {
      gsap.set(el, { autoAlpha: 0, y: 30 });
    }
  });
}
