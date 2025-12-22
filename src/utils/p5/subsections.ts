import type { SectionName } from "@/helpers/scroll";
import { SECTION_STEPS } from "@/helpers/scroll";

export type FormationType = "grid" | "rings" | "distributedRings" | "invisible";

// Type for values that can differ between mobile and desktop
export type ResponsiveValue<T> = T | { mobile: T; desktop: T };

export interface SubsectionConfig {
  progressStart: number; // 0-1 within the section
  progressEnd: number; // 0-1 within the section
  formation: FormationType;
  // Optional ring center position
  // Can be 'chartCenter' to use the chart circle center from DOM
  // Or an object with x, y values (0-1, relative to canvas size)
  // Default is {x: 0.5, y: 0.5} (center of screen)
  ringCenter?: ResponsiveValue<"chartCenter" | { x: number; y: number }>;
  // Optional properties for rings formation
  innerRadius?: ResponsiveValue<number>; // Starting radius for the first ring
  ringsCount?: ResponsiveValue<number>; // Number of concentric rings
  baseSize?: ResponsiveValue<number>; // Base size of circles
  // Animation properties
  pulseIntensity?: ResponsiveValue<number>;
  alpha?: number; // Base opacity for circles (0-1) - Default: 0.6
  // DistributedRings formation configuration
  distributedRingsConfig?: {
    innerRadius?: ResponsiveValue<number | "screenHeight" | "chartRadius">; // Starting radius: direct number, "screenHeight" for screen height, or "chartRadius" for chart circle radius - Default: 200
    innerRadiusOffset?: ResponsiveValue<number>; // Offset to add/subtract from innerRadius (e.g., -40 to start inside, +40 to start outside) - Default: 0
    ringsCount?: ResponsiveValue<number>; // Number of concentric rings (3-5 recommended) - Default: 4
    radiusStep?: ResponsiveValue<number>; // Distance between each ring - Default: 60
    circleSize?: ResponsiveValue<number>; // Fixed size of circles - Default: 8
    arcSpacing?: ResponsiveValue<number>; // Arc length spacing between circles - Default: 30
    distributionZoneAngle?: ResponsiveValue<number>; // Angle range around horizontal center - Default: PI/3
    distributionZoneAngleInner?: ResponsiveValue<number>; // Angle for innermost ring (use with distributionZoneAngleOuter for gradient)
    distributionZoneAngleOuter?: ResponsiveValue<number>; // Angle for outermost ring (creates gradient with distributionZoneAngleInner)
    distributionMinRadius?: ResponsiveValue<number>; // Min scatter distance - Default: 20
    distributionMaxRadius?: ResponsiveValue<number>; // Max scatter distance - Default: 120
    distributionSeed?: ResponsiveValue<number>; // Random seed - Default: 42
  };
  color: string;
}

const defaultColor = "48, 48, 97"; // Default deep blue
const brightGreen = "96, 226, 183";

// Helper to resolve responsive values based on screen size
export function resolveResponsive<T>(
  value: ResponsiveValue<T> | undefined,
  mobile: boolean
): T | undefined {
  if (value === undefined) return undefined;
  if (
    value &&
    typeof value === "object" &&
    "mobile" in value &&
    "desktop" in value
  ) {
    return mobile ? value.mobile : value.desktop;
  }
  return value as T;
}

// Helper to resolve all responsive properties in distributedRingsConfig
export function resolveDistributedRingsConfig(
  config: SubsectionConfig["distributedRingsConfig"],
  mobile: boolean
) {
  if (!config) return {};

  return {
    innerRadius: resolveResponsive(config.innerRadius, mobile),
    innerRadiusOffset: resolveResponsive(config.innerRadiusOffset, mobile),
    ringsCount: resolveResponsive(config.ringsCount, mobile),
    radiusStep: resolveResponsive(config.radiusStep, mobile),
    circleSize: resolveResponsive(config.circleSize, mobile),
    arcSpacing: resolveResponsive(config.arcSpacing, mobile),
    distributionZoneAngle: resolveResponsive(
      config.distributionZoneAngle,
      mobile
    ),
    distributionZoneAngleInner: resolveResponsive(
      config.distributionZoneAngleInner,
      mobile
    ),
    distributionZoneAngleOuter: resolveResponsive(
      config.distributionZoneAngleOuter,
      mobile
    ),
    distributionMinRadius: resolveResponsive(
      config.distributionMinRadius,
      mobile
    ),
    distributionMaxRadius: resolveResponsive(
      config.distributionMaxRadius,
      mobile
    ),
    distributionSeed: resolveResponsive(config.distributionSeed, mobile),
  };
}

const configDistributedRingsCenterFullScreen = {
  formation: "distributedRings" as FormationType,
  ringCenter: { x: 0.5, y: 0.5 },

  distributedRingsConfig: {
    innerRadius: "screenHeight" as const, // Dynamically use screen height
    innerRadiusOffset: -(30 * 3 + 30 / 2), // Start 60px inside the chart circle
    ringsCount: 6,
    radiusStep: 30,
    // distributionZoneAngle: Math.PI / 4, // 45 degrees
    distributionZoneAngleInner: Math.PI / 8, // ~22.5° for innermost ring
    distributionZoneAngleOuter: Math.PI / 3, // ~60° for outermost ring
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
      ringCenter: {
        mobile: { x: 1, y: 0.65 },
        desktop: { x: 0.8, y: 0.5 },
      },
      innerRadius: {
        mobile: 150,
        desktop: 260,
      },
      ringsCount: { mobile: 3, desktop: 5 },
      baseSize: { mobile: 10, desktop: 15 },
      pulseIntensity: { mobile: 0.5, desktop: 0.8 },
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
        innerRadius: "chartRadius", // Use chart circle radius
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
