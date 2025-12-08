import { gsap } from "gsap";

/**
 * Shared scroll configuration constants for consistent behavior across all sections
 */
export const SCROLL_CONFIG = {
  // Each step should take 100vh of scroll
  SCROLL_PER_STEP: 100,

  // Animation timings
  TRANSITION_DURATION: 0.4,
  TRANSITION_DELAY: 0.4,

  // Easing curves
  FADE_OUT_EASE: "power2.in",
  FADE_IN_EASE: "power2.out",

  // Snap configuration
  SNAP_DURATION: 0.3,
  SNAP_EASE: "power1.inOut",

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
 * Calculate which step should be active based on scroll progress
 * @param progress - Current scroll progress (0-1)
 * @param steps - Total number of steps
 * @returns Current step index (0-based)
 */
export function getActiveStep(progress: number, steps: number): number {
  for (let i = 0; i < steps; i++) {
    if (progress < (i + 1) / steps) {
      return i;
    }
  }
  return steps - 1;
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
