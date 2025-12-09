import type { SectionName } from "@/hooks/useScrollProgress";

export type FormationType =
  | "grid"
  | "wave"
  | "rings"
  | "quadrants"
  | "converge"
  | "spiral";

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
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "grid", // Temporarily using grid
    },
    // {
    //   progressStart: 0,
    //   progressEnd: 0.33,
    //   formation: "rings", // Circle in center for first screen
    // },
    // {
    //   progressStart: 0.33,
    //   progressEnd: 1,
    //   formation: "wave", // Wave for remaining screens
    // },
  ],
  quadrant: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "grid", // Temporarily using grid
      // formation: "quadrants",
    },
  ],
  closure: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "grid", // Temporarily using grid
      // formation: "converge",
    },
  ],
  cta: [
    {
      progressStart: 0,
      progressEnd: 1,
      formation: "grid", // Temporarily using grid
      // formation: "rings",
    },
  ],
};

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
