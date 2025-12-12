import type P5 from "p5";
import type { Circle } from "../CircleManager";
import type { Formation } from "./Formation";

export interface RingsFormationConfig {
  centerX: number; // Center X position (typically p5.width * ringCenter.x)
  centerY: number; // Center Y position (typically p5.height * ringCenter.y)
  pulseIntensity: number; // Pulse animation intensity (0 = no pulse, 1 = full pulse)
  arcSpacing: number; // Arc length spacing between circles (in pixels)
  innerRadius: number; // Starting radius for the first ring
  ringsCount: number; // Number of concentric rings
  radiusStep: number; // Distance between each ring
  baseSize: number; // Base size of circles when pulsing
  baseSizeNoPulse: number; // Base size when not pulsing
  pulseSpeed: number; // Speed of the pulse animation
  pulseAmount: number; // Maximum pulse size variation
  smoothing: number; // Smoothing factor for size transition
}

/**
 * Rings formation with concentric circles and optional pulsing animation.
 */
export class RingsFormation implements Formation {
  private config: RingsFormationConfig;

  constructor(config?: Partial<RingsFormationConfig>) {
    this.config = {
      centerX: 0,
      centerY: 0,
      pulseIntensity: 0,
      arcSpacing: 30,
      innerRadius: 260,
      ringsCount: 5,
      radiusStep: 20,
      baseSize: 18,
      baseSizeNoPulse: 12,
      pulseSpeed: 0.0025,
      pulseAmount: 6,
      smoothing: 0.15,
      ...config,
    };
  }

  /**
   * Apply rings formation with optional pulsing animation
   */
  apply(
    circles: Circle[],
    p5: P5,
    time: number,
    config?: Partial<RingsFormationConfig>
  ): void {
    // Update config if provided
    if (config) {
      this.config = { ...this.config, ...config };
    }

    const {
      centerX,
      centerY,
      pulseIntensity,
      arcSpacing,
      innerRadius,
      ringsCount,
      radiusStep,
      baseSize,
      baseSizeNoPulse,
      pulseSpeed,
      pulseAmount,
      smoothing,
    } = this.config;

    const effectiveBaseSize = pulseIntensity > 0 ? baseSize : baseSizeNoPulse;
    const effectivePulseAmount = pulseAmount * pulseIntensity;

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

        circle.targetX = centerX + p5.cos(angle) * radius;
        circle.targetY = centerY + p5.sin(angle) * radius;

        // Apply pulsing animation if pulseIntensity > 0
        if (pulseIntensity > 0) {
          // Use sine wave with randomized offset per circle for variety
          const randomOffset = circleIndex * 2.7; // Prime-like number for pseudo-random distribution
          const randomSpeed = 1 + (circleIndex % 7) * 0.15; // Vary speed per circle
          const pulse =
            p5.sin(time * pulseSpeed * randomSpeed + randomOffset) *
            effectivePulseAmount;
          const targetSize = effectiveBaseSize + pulse;
          // Smoothly interpolate towards target size
          circle.size += (targetSize - circle.size) * smoothing;
        } else {
          // No pulse, use fixed size
          circle.size = effectiveBaseSize;
        }

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
  setConfig(config: Partial<RingsFormationConfig>): void {
    this.config = { ...this.config, ...config };
  }
}
