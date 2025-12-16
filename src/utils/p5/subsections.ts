import type { SectionName } from "@/helpers/scroll";
import { SECTION_STEPS } from "@/helpers/scroll";

export type FormationType = "grid" | "rings" | "distributedRings" | "invisible";

export interface SubsectionConfig {
  progressStart: number; // 0-1 within the section
  progressEnd: number; // 0-1 within the section
  formation: FormationType;
  // Optional ring center position
  // Can be 'chartCenter' to use the chart circle center from DOM
  // Or an object with x, y values (0-1, relative to canvas size)
  // Default is {x: 0.5, y: 0.5} (center of screen)
  ringCenter?: "chartCenter" | { x: number; y: number };
  // Animation properties
  pulseIntensity?: number;
  alpha?: number; // Base opacity for circles (0-1) - Default: 0.6
  // DistributedRings formation configuration
  distributedRingsConfig?: {
    innerRadius?: number; // Starting radius for the first ring - Default: 200
    innerRadiusOffset?: number; // Offset to add/subtract from innerRadius (e.g., -40 to start inside, +40 to start outside) - Default: 0
    ringsCount?: number; // Number of concentric rings (3-5 recommended) - Default: 4
    radiusStep?: number; // Distance between each ring - Default: 60
    circleSize?: number; // Fixed size of circles - Default: 8
    arcSpacing?: number; // Arc length spacing between circles - Default: 30
    distributionZoneAngle?: number; // Angle range around horizontal center - Default: PI/3
    distributionMinRadius?: number; // Min scatter distance - Default: 20
    distributionMaxRadius?: number; // Max scatter distance - Default: 120
    distributionSeed?: number; // Random seed - Default: 42
  };
  color: string;
}

const defaultColor = "48, 48, 97"; // Default deep blue
const brightGreen = "96, 226, 183";

const configDistributedRingsCenterFullScreen = {
  formation: "distributedRings" as FormationType,
  ringCenter: { x: 0.5, y: 0.5 },

  distributedRingsConfig: {
    innerRadius: 380,
    innerRadiusOffset: 0,
    ringsCount: 4,
    radiusStep: 40,
    distributionZoneAngle: Math.PI / 4, // 45 degrees
    distributionMinRadius: 30,
    distributionMaxRadius: 250,
  },
};

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
      color: defaultColor,
      ...configDistributedRingsCenterFullScreen,
    },
    {
      progressStart: 1 / SECTION_STEPS.quadrant,
      progressEnd: 1,
      formation: "distributedRings",
      ringCenter: "chartCenter",
      distributedRingsConfig: {
        // innerRadius: 380, // Matches the chart circle radius (innerWidth/2 = 760/2 = 380px)
        innerRadiusOffset: -60, // Start 60px inside the chart circle
        ringsCount: 4,
        radiusStep: 40,
        distributionZoneAngle: Math.PI / 4, // 45 degrees
        distributionMinRadius: 30,
        distributionMaxRadius: 140,
      },
      alpha: 0.4,
      color: defaultColor,
    },
  ],
  closure: [
    {
      progressStart: 0,
      progressEnd: 1,
      alpha: 0.2,
      color: brightGreen,
      ...configDistributedRingsCenterFullScreen,
    },
  ],
  cta: [
    {
      progressStart: 0,
      progressEnd: 1,
      alpha: 0.2,
      color: brightGreen,
      ...configDistributedRingsCenterFullScreen,
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
