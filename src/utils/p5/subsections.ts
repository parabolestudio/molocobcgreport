import type { SectionName } from "@/helpers/scroll";

export type FormationType =
  | "grid"
  | "wave"
  | "rings"
  | "quadrants"
  | "converge"
  | "spiral"
  | "invisible";

export interface SubsectionConfig {
  progressStart: number; // 0-1 within the section
  progressEnd: number; // 0-1 within the section
  formation: FormationType;
  // Optional ring center position (0-1 values, relative to canvas size)
  // Default is {x: 0.5, y: 0.5} (center of screen)
  ringCenter?: { x: number; y: number };
  // Animation properties
  pulseIntensity: number;
  color: string;
  speed: number;
}

const defaultColor = "48, 48, 97"; // Default deep blue

export const subsectionConfigs: Record<SectionName, SubsectionConfig[]> = {
  hook: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "grid",
      pulseIntensity: 0.8,
      color: defaultColor,
      speed: 2.5,
    },
  ],
  journey: [
    {
      progressStart: 0,
      progressEnd: 0.2,
      formation: "rings", // "rings" Circle in center for first screen
      ringCenter: { x: 0.8, y: 0.5 }, // 80% to the right, centered vertically
      pulseIntensity: 0.4,
      color: defaultColor,
      speed: 1.5,
    },
    {
      progressStart: 0.2,
      progressEnd: 1,
      formation: "invisible",
      pulseIntensity: 0.4,
      color: defaultColor,
      speed: 1.5,
    },
  ],
  quadrant: [
    {
      progressStart: 0,
      progressEnd: 1 / 8,
      formation: "invisible",
      ringCenter: { x: 0.5, y: 0.5 },
      pulseIntensity: 0.3,
      color: defaultColor,
      speed: 1,
    },
    {
      progressStart: 1 / 8,
      progressEnd: 1,
      formation: "invisible",
      ringCenter: { x: 0.8, y: 0.5 },
      pulseIntensity: 0.3,
      color: defaultColor,
      speed: 1,
    },
  ],
  closure: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "invisible", // Temporarily invisible
      // formation: "converge",
      pulseIntensity: 0.5,
      color: defaultColor,
      speed: 0.8,
    },
  ],
  cta: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "grid",
      pulseIntensity: 0.6,
      color: defaultColor,
      speed: 2,
    },
  ],
};

// Get the active subsection index based on section and progress
export function getActiveSubsectionIndex(
  section: SectionName,
  sectionProgress: number
): number {
  const subsections = subsectionConfigs[section];

  for (let i = 0; i < subsections.length; i++) {
    const subsection = subsections[i];
    if (
      sectionProgress >= subsection.progressStart &&
      sectionProgress < subsection.progressEnd
    ) {
      return i;
    }
  }

  // Default to last subsection if we're at the end
  return subsections.length - 1;
}

// Get the active subsection formation based on section and progress
export function getActiveFormation(
  section: SectionName,
  sectionProgress: number
): FormationType {
  const subsections = subsectionConfigs[section];

  for (const subsection of subsections) {
    if (
      sectionProgress >= subsection.progressStart &&
      sectionProgress < subsection.progressEnd
    ) {
      return subsection.formation;
    }
  }

  // Default to last subsection if we're at the end
  return subsections[subsections.length - 1].formation;
}

// Get the ring center position for the active subsection
export function getRingCenter(
  section: SectionName,
  sectionProgress: number
): { x: number; y: number } {
  const subsections = subsectionConfigs[section];

  for (const subsection of subsections) {
    if (
      sectionProgress >= subsection.progressStart &&
      sectionProgress < subsection.progressEnd
    ) {
      // Return custom center or default to screen center
      return subsection.ringCenter || { x: 0.5, y: 0.5 };
    }
  }

  // Default to screen center
  return { x: 0.5, y: 0.5 };
}
