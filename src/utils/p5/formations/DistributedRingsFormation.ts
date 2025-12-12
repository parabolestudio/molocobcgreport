import type P5 from "p5";
import type { Circle } from "../CircleManager";
import type { Formation } from "./Formation";

export interface DistributedRingsFormationConfig {
  centerX: number; // Center X position (typically p5.width * ringCenter.x)
  centerY: number; // Center Y position (typically p5.height * ringCenter.y)
  arcSpacing: number; // Arc length spacing between circles (in pixels) - Default: 30
  innerRadius: number; // Starting radius for the first ring - Default: 200
  ringsCount: number; // Number of concentric rings (3-5 recommended) - Default: 4
  radiusStep: number; // Distance between each ring - Default: 60
  circleSize: number; // Fixed size of circles (no pulsing) - Default: 8
  smoothing: number; // Smoothing factor for position transition - Default: 0.08

  // Distribution settings
  distributionZoneAngle: number; // Angle range (in radians) around horizontal center where distribution occurs - Default: PI/3 (60 degrees on each side)
  distributionMinRadius: number; // Minimum outward distribution distance - Default: 20
  distributionMaxRadius: number; // Maximum outward distribution distance - Default: 120
  distributionSeed: number; // Seed for consistent random distribution pattern - Default: 42
}

/**
 * DistributedRings formation: Concentric rings with circles near horizontal center
 * randomly distributed outward for an organic, scattered effect.
 *
 * Usage:
 * 1. Set centerX and centerY to position the rings (use 0-1 values in subsections.ts,
 *    they'll be multiplied by canvas size in P5Background.tsx)
 * 2. Configure ringsCount (3-5 recommended) and radiusStep to control ring density
 * 3. Adjust distributionZoneAngle to control how wide the horizontal distribution zone is
 *    - Smaller values (PI/6) = narrow horizontal band
 *    - Larger values (PI/2) = wider distribution area
 * 4. Set distributionMinRadius and distributionMaxRadius to control scatter range
 * 5. Change distributionSeed for different random patterns
 *
 * Example in subsections.ts:
 * {
 *   progressStart: 0,
 *   progressEnd: 1,
 *   formation: "distributedRings",
 *   ringCenter: { x: 0.5, y: 0.5 }, // Center of screen
 *   color: "48, 48, 97",
 * }
 */
export class DistributedRingsFormation implements Formation {
  private config: DistributedRingsFormationConfig;
  private randomDistributions: Map<number, { deltaX: number; deltaY: number }> =
    new Map();

  constructor(config?: Partial<DistributedRingsFormationConfig>) {
    this.config = {
      centerX: 0,
      centerY: 0,
      arcSpacing: 30,
      innerRadius: 200,
      ringsCount: 4,
      radiusStep: 60,
      circleSize: 8,
      smoothing: 0.08,
      distributionZoneAngle: Math.PI / 3, // 60 degrees
      distributionMinRadius: 20,
      distributionMaxRadius: 120,
      distributionSeed: 42,
      ...config,
    };
  }

  /**
   * Seeded random number generator for consistent patterns
   */
  private seededRandom(seed: number): number {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  /**
   * Check if an angle is within the horizontal distribution zone
   * Horizontal center is at 0 (right) and PI (left)
   */
  private isInDistributionZone(angle: number): boolean {
    const { distributionZoneAngle } = this.config;
    const normalizedAngle = angle % (Math.PI * 2);

    // Right zone (around 0 or 2*PI)
    const rightDiff = Math.min(
      Math.abs(normalizedAngle),
      Math.abs(normalizedAngle - Math.PI * 2)
    );

    // Left zone (around PI)
    const leftCenter = Math.PI;
    const leftDiff = Math.abs(normalizedAngle - leftCenter);

    return (
      rightDiff <= distributionZoneAngle || leftDiff <= distributionZoneAngle
    );
  }

  /**
   * Calculate random distribution offset for a circle
   */
  private getDistributionOffset(
    circleIndex: number,
    angle: number
  ): { deltaX: number; deltaY: number } {
    // Check cache first
    if (this.randomDistributions.has(circleIndex)) {
      return this.randomDistributions.get(circleIndex)!;
    }

    const { distributionSeed, distributionMinRadius, distributionMaxRadius } =
      this.config;

    // Generate seeded random values
    const seed1 = distributionSeed + circleIndex * 2;
    const seed2 = distributionSeed + circleIndex * 2 + 1;

    const randomDistance =
      distributionMinRadius +
      this.seededRandom(seed1) *
        (distributionMaxRadius - distributionMinRadius);
    const randomAngleOffset = (this.seededRandom(seed2) - 0.5) * Math.PI * 0.4; // ±36 degrees variation

    // Calculate outward direction (perpendicular to ring)
    const outwardAngle = angle + randomAngleOffset;
    const deltaX = Math.cos(outwardAngle) * randomDistance;
    const deltaY = Math.sin(outwardAngle) * randomDistance;

    const offset = { deltaX, deltaY };
    this.randomDistributions.set(circleIndex, offset);

    return offset;
  }

  /**
   * Apply distributed rings formation
   */
  apply(
    circles: Circle[],
    p5: P5,
    time: number,
    config?: Partial<DistributedRingsFormationConfig>
  ): void {
    // Update config if provided
    if (config) {
      this.config = { ...this.config, ...config };
      // Clear distribution cache when config changes
      this.randomDistributions.clear();
    }

    const {
      centerX,
      centerY,
      arcSpacing,
      innerRadius,
      ringsCount,
      radiusStep,
      circleSize,
      smoothing,
    } = this.config;

    let circleIndex = 0;

    // For each ring, calculate how many circles fit based on arc spacing
    for (
      let ringIndex = 0;
      ringIndex < ringsCount && circleIndex < circles.length;
      ringIndex++
    ) {
      const radius = innerRadius + ringIndex * radiusStep;
      const circumference = p5.TWO_PI * radius;

      // Calculate how many circles fit on this ring with the desired arc spacing
      const maxCirclesOnRing = Math.floor(circumference / arcSpacing);
      const angleStep = p5.TWO_PI / maxCirclesOnRing;

      // Place circles on this ring
      for (
        let i = 0;
        i < maxCirclesOnRing && circleIndex < circles.length;
        i++
      ) {
        const circle = circles[circleIndex];
        const angle = i * angleStep;

        // Base position on ring
        let targetX = centerX + p5.cos(angle) * radius;
        let targetY = centerY + p5.sin(angle) * radius;

        // Check if this circle should be distributed
        if (this.isInDistributionZone(angle)) {
          const offset = this.getDistributionOffset(circleIndex, angle);
          targetX += offset.deltaX;
          targetY += offset.deltaY;
        }

        circle.targetX = targetX;
        circle.targetY = targetY;

        // Set fixed size (no pulsing)
        circle.targetSize = circleSize;
        circle.size = circleSize;

        circleIndex++;
      }
    }

    // Hide all unused circles
    for (let i = circleIndex; i < circles.length; i++) {
      circles[i].targetSize = 0;
      circles[i].size = 0;
    }
  }

  /**
   * Update configuration
   */
  setConfig(config: Partial<DistributedRingsFormationConfig>): void {
    this.config = { ...this.config, ...config };
    // Clear distribution cache when config changes
    this.randomDistributions.clear();
  }
}
