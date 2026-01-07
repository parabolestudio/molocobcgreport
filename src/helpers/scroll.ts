import { gsap } from "gsap";

/**
 * Section names used throughout the application
 */
export const SECTION_NAMES = [
  "hook",
  "journey",
  "quadrant",
  "closure",
  "cta",
] as const;

export type SectionName = (typeof SECTION_NAMES)[number];

/**
 * Number of scroll steps for each section
 */
export const SECTION_STEPS: Record<SectionName, number> = {
  hook: 3,
  journey: 5,
  quadrant: 8,
  closure: 3,
  cta: 1,
};

/**
 * Shared scroll configuration constants for consistent behavior across all sections
 */
export const SCROLL_CONFIG = {
  // Balanced scroll distance for mobile - not too sensitive, not too sluggish
  SCROLL_PER_STEP: 100, // for Android 200

  // Animation timings
  TRANSITION_DURATION: 0.4,
  TRANSITION_DELAY: 0.4,

  // Easing curves
  FADE_OUT_EASE: "power2.in",
  FADE_IN_EASE: "power2.out",

  // Snap configuration
  SNAP_DURATION: 0.2,
  SNAP_EASE: "power2.out", //"power1.inOut",

  // Animation properties
  FADE_OUT_Y: -30,
  FADE_IN_Y: 30,
} as const;

/**
 * Animation configuration for fade transitions
 */
export const ANIMATION_CONFIG = {
  duration: SCROLL_CONFIG.TRANSITION_DURATION,
  fadeOut: {
    y: SCROLL_CONFIG.FADE_OUT_Y,
    ease: SCROLL_CONFIG.FADE_OUT_EASE,
  },
  fadeIn: {
    y: 0,
    ease: SCROLL_CONFIG.FADE_IN_EASE,
    delay: SCROLL_CONFIG.TRANSITION_DELAY,
  },
} as const;

/**
 * Calculate the total scroll distance based on number of steps
 * @param steps - Number of steps/screens in the section
 * @returns CSS percentage string for ScrollTrigger end property
 */
export function calculateScrollEnd(steps: number): string {
  return `+=${steps * SCROLL_CONFIG.SCROLL_PER_STEP}%`;
}

/**
 * Generate evenly distributed snap points for a given number of steps
 * @param steps - Number of steps/screens in the section
 * @returns Array of snap points from 0 to 1
 */
export function generateSnapPoints(steps: number): number[] {
  const points: number[] = [];
  for (let i = 0; i <= steps; i++) {
    points.push(i / steps);
  }
  return points;
}

/**
 * Fade out an element with consistent animation
 * @param element - Element to fade out
 * @param config - Optional animation config override
 */
export function fadeOut(
  element: gsap.TweenTarget,
  config: Partial<typeof ANIMATION_CONFIG> = {}
): gsap.core.Tween {
  return gsap.to(element, {
    autoAlpha: 0,
    duration: config.duration ?? ANIMATION_CONFIG.duration,
    y: config.fadeOut?.y ?? ANIMATION_CONFIG.fadeOut.y,
    ease: config.fadeOut?.ease ?? ANIMATION_CONFIG.fadeOut.ease,
  });
}

/**
 * Fade in an element with consistent animation
 * @param element - Element to fade in
 * @param config - Optional animation config override
 */
export function fadeIn(
  element: gsap.TweenTarget,
  config: Partial<typeof ANIMATION_CONFIG> = {}
): gsap.core.Tween {
  return gsap.fromTo(
    element,
    { autoAlpha: 0, y: SCROLL_CONFIG.FADE_IN_Y },
    {
      autoAlpha: 1,
      duration: config.duration ?? ANIMATION_CONFIG.duration,
      y: config.fadeIn?.y ?? ANIMATION_CONFIG.fadeIn.y,
      ease: config.fadeIn?.ease ?? ANIMATION_CONFIG.fadeIn.ease,
      delay: config.fadeIn?.delay ?? ANIMATION_CONFIG.fadeIn.delay,
    }
  );
}

/**
 * Create a transition between two elements with consistent animation
 * @param oldElement - Element to fade out
 * @param newElement - Element to fade in
 * @param config - Optional animation config override
 */
export function transitionElements(
  oldElement: gsap.TweenTarget,
  newElement: gsap.TweenTarget,
  config: Partial<typeof ANIMATION_CONFIG> = {}
): void {
  fadeOut(oldElement, config);
  fadeIn(newElement, config);
}

/**
 * Get snap configuration for ScrollTrigger
 */
export function getSnapConfig(steps: number) {
  return {
    snapTo: generateSnapPoints(steps),
    duration: SCROLL_CONFIG.SNAP_DURATION,
    ease: SCROLL_CONFIG.SNAP_EASE,
  };
}

/**
 * Section definition for global scroll management
 */
export interface SectionDefinition {
  name: string;
  steps: number;
  startStep: number; // Global step number where this section starts
  endStep: number; // Global step number where this section ends
}

/**
 * Calculate section definitions from step counts
 * @param stepCounts - Array of step counts for each section
 * @param sectionNames - Optional array of section names
 * @returns Array of section definitions with calculated ranges
 */
export function calculateSectionDefinitions(
  stepCounts: number[],
  sectionNames?: string[]
): SectionDefinition[] {
  const sections: SectionDefinition[] = [];
  let currentStartStep = 0;

  stepCounts.forEach((steps, index) => {
    sections.push({
      name: sectionNames?.[index] || `section-${index}`,
      steps,
      startStep: currentStartStep,
      endStep: currentStartStep + steps - 1,
    });
    currentStartStep += steps;
  });

  return sections;
}

/**
 * Get the active section and local step based on global progress
 * @param progress - Overall scroll progress (0-1)
 * @param sections - Array of section definitions
 * @returns Object with active section index and local step within that section
 */
export function getActiveSectionAndStep(
  progress: number,
  sections: SectionDefinition[]
): { sectionIndex: number; localStep: number; section: SectionDefinition } {
  const totalSteps = sections.reduce((sum, s) => sum + s.steps, 0);

  // Clamp progress to valid range
  const clampedProgress = Math.max(0, Math.min(1, progress));

  // Calculate which global step we're at
  // Use totalSteps instead of totalSteps for better distribution
  const globalStepFloat = clampedProgress * totalSteps;
  const globalStep = Math.min(Math.floor(globalStepFloat), totalSteps - 1);

  // console.log("getActiveSectionAndStep:", {
  //   progress: clampedProgress,
  //   globalStepFloat,
  //   globalStep,
  //   totalSteps,
  // });

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (globalStep >= section.startStep && globalStep <= section.endStep) {
      const localStep = globalStep - section.startStep;
      // console.log(
      //   `Found section ${i} (${section.name}), local step ${localStep}`
      // );
      return {
        sectionIndex: i,
        localStep,
        section,
      };
    }
  }

  // Fallback to last section
  const lastSection = sections[sections.length - 1];
  // console.log("Fallback to last section");
  return {
    sectionIndex: sections.length - 1,
    localStep: lastSection.steps - 1,
    section: lastSection,
  };
}

/**
 * Calculate scroll position for a specific section and step
 * @param sectionIndex - Index of the target section
 * @param localStep - Step within the target section (0-based)
 * @param sections - Array of section definitions
 * @returns Normalized scroll progress (0-1)
 */
export function calculateScrollPosition(
  sectionIndex: number,
  localStep: number,
  sections: SectionDefinition[]
): number {
  const section = sections[sectionIndex];
  if (!section) return 0;

  const totalSteps = sections.reduce((sum, s) => sum + s.steps, 0);
  const globalStep = section.startStep + localStep;

  return globalStep / totalSteps;
}
