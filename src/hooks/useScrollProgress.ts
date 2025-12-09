"use client";

import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  getActiveSectionAndStep,
  calculateSectionDefinitions,
  type SectionDefinition,
} from "@/helpers/scroll";

export interface SectionProgress {
  activeSection: number;
  sectionProgress: number; // 0-1 within current section
  totalProgress: number; // 0-1 for entire page
  globalStep: number; // Current global step across all sections
}

export const SECTION_NAMES = [
  "hook",
  "journey",
  "quadrant",
  "closure",
  "cta",
] as const;

export type SectionName = (typeof SECTION_NAMES)[number];

// Number of scroll steps for each section (matches STEPS in each section component)
export const SECTION_STEPS: Record<SectionName, number> = {
  hook: 3,
  journey: 5,
  quadrant: 8,
  closure: 3,
  cta: 1,
};

const TOTAL_STEPS = Object.values(SECTION_STEPS).reduce((a, b) => a + b, 0);

// Create section definitions using the shared helper
const SECTION_DEFINITIONS: SectionDefinition[] = calculateSectionDefinitions(
  Object.values(SECTION_STEPS),
  [...SECTION_NAMES]
);

/**
 * Hook to track scroll progress with the global ScrollTrigger architecture.
 * Now works by detecting the single global ScrollTrigger instance.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState<SectionProgress>({
    activeSection: 0,
    sectionProgress: 0,
    totalProgress: 0,
    globalStep: 0,
  });

  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    let rafId: number | null = null;

    const updateProgress = () => {
      const triggers = ScrollTrigger.getAll();

      // Find the global ScrollTrigger (it should be the one with the most steps)
      const globalTrigger = triggers.find((t) => {
        const end = t.vars.end;
        // The global trigger will have an end like "+=1900%" for 19 steps
        return (
          typeof end === "string" && end.includes("+=") && parseInt(end) >= 1000
        );
      });

      if (globalTrigger) {
        const totalProgress = globalTrigger.progress;

        // Use the SAME calculation as useGlobalScrollTrigger
        const { sectionIndex, localStep } = getActiveSectionAndStep(
          totalProgress,
          SECTION_DEFINITIONS
        );

        const sectionSteps = SECTION_STEPS[SECTION_NAMES[sectionIndex]];
        const sectionProgress = localStep / sectionSteps;
        const globalStep =
          SECTION_DEFINITIONS[sectionIndex].startStep + localStep;

        const current = progressRef.current;

        // Always update state, but only log significant changes
        const changed =
          current.activeSection !== sectionIndex ||
          current.globalStep !== globalStep ||
          Math.abs(current.sectionProgress - sectionProgress) > 0.01;

        if (changed) {
          console.log(
            `📊 useScrollProgress: Section ${sectionIndex} (${SECTION_NAMES[sectionIndex]}), ` +
              `Global step ${globalStep}, Local step ${localStep}/${sectionSteps}, ` +
              `Section progress ${(sectionProgress * 100).toFixed(1)}%, ` +
              `Total progress ${(totalProgress * 100).toFixed(1)}%`
          );

          setProgress({
            activeSection: sectionIndex,
            sectionProgress,
            totalProgress,
            globalStep,
          });
        }
      }
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    // Initial update with a slight delay to ensure ScrollTrigger is created
    const initialTimer = setTimeout(updateProgress, 100);

    // Listen for scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Listen for ScrollTrigger updates - this is key for real-time updates
    ScrollTrigger.addEventListener("refresh", updateProgress);
    ScrollTrigger.addEventListener("scrollEnd", updateProgress);

    return () => {
      clearTimeout(initialTimer);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.removeEventListener("refresh", updateProgress);
      ScrollTrigger.removeEventListener("scrollEnd", updateProgress);
    };
  }, []);

  return {
    ...progress,
    sectionName: SECTION_NAMES[progress.activeSection] || "hook",
  };
}
