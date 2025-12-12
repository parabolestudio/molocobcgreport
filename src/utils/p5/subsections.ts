import type { SectionName } from "@/helpers/scroll";
import { SECTION_STEPS } from "@/helpers/scroll";

export type FormationType = "grid" | "rings" | "invisible";

export interface SubsectionConfig {
  progressStart: number; // 0-1 within the section
  progressEnd: number; // 0-1 within the section
  formation: FormationType;
  // Optional ring center position (0-1 values, relative to canvas size)
  // Default is {x: 0.5, y: 0.5} (center of screen)
  ringCenter?: { x: number; y: number };
  // Animation properties
  pulseIntensity?: number;
  color: string;
}

const defaultColor = "48, 48, 97"; // Default deep blue

export const subsectionConfigs: Record<SectionName, SubsectionConfig[]> = {
  hook: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "grid",
      color: defaultColor,
    },
  ],
  journey: [
    {
      progressStart: 0,
      progressEnd: 1 / SECTION_STEPS.journey,
      formation: "rings",
      ringCenter: { x: 0.8, y: 0.5 }, // 80% to the right, centered vertically
      pulseIntensity: 0.8,
      color: defaultColor,
    },
    {
      progressStart: 1 / SECTION_STEPS.journey,
      progressEnd: 1,
      formation: "invisible",
      color: defaultColor,
    },
  ],
  quadrant: [
    {
      progressStart: 0,
      progressEnd: 1 / SECTION_STEPS.quadrant,
      formation: "invisible",
      color: defaultColor,
    },
    {
      progressStart: 1 / SECTION_STEPS.quadrant,
      progressEnd: 1,
      formation: "invisible",
      color: defaultColor,
    },
  ],
  closure: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "invisible",
      color: defaultColor,
    },
  ],
  cta: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "grid",
      color: defaultColor,
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
