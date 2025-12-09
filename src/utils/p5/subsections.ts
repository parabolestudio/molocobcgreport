import type { SectionName } from "@/hooks/useScrollProgress";

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
}

// Define subsections for each section
export const subsectionConfigs: Record<SectionName, SubsectionConfig[]> = {
  hook: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "grid",
    },
  ],
  journey: [
    // {
    //   progressStart: 0,
    //   progressEnd: 1,
    //   formation: "invisible", // Temporarily invisible
    // },
    {
      progressStart: 0,
      progressEnd: 0.2,
      formation: "invisible", // "rings" Circle in center for first screen
    },
    {
      progressStart: 0.2,
      progressEnd: 1,
      formation: "invisible",
    },
  ],
  quadrant: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "invisible", // Temporarily invisible
      // formation: "quadrants",
    },
  ],
  closure: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "invisible", // Temporarily invisible
      // formation: "converge",
    },
  ],
  cta: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "invisible", // Temporarily invisible
      // formation: "rings",
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
