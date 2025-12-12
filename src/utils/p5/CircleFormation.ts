import type P5 from "p5";
import type { Circle } from "./CircleGrid";

export class CircleFormation {
  constructor(private p5: P5) {}

  // Arrange circles in concentric rings with optional pulsing animation
  applyRings(
    circles: Circle[],
    centerX: number,
    centerY: number,
    time: number,
    pulseIntensity: number = 0,
    arcSpacing: number = 30, // Arc length spacing between circles (in pixels)
    innerRadius: number = 260 // Starting radius for the first ring
  ) {
    const ringsCount = 5;
    const radiusStep = 20;
    const baseSize = pulseIntensity > 0 ? 18 : 12; // Use larger base size when pulsing
    const pulseSpeed = 0.0025; // Speed of the pulse
    const pulseAmount = 6 * pulseIntensity; // Scale pulse amount by intensity (0-1)
    const smoothing = 0.15; // Smoothing factor for size transition

    let circleIndex = 0;

    // For each ring, calculate how many circles fit based on arc spacing
    for (
      let ringIndex = 0;
      ringIndex < ringsCount && circleIndex < circles.length;
      ringIndex++
    ) {
      const radius = innerRadius + ringIndex * radiusStep;
      const circumference = this.p5.TWO_PI * radius;

      // Calculate how many circles fit on this ring with the desired arc spacing
      const maxCirclesOnRing = Math.floor(circumference / arcSpacing);
      const angleStep = this.p5.TWO_PI / maxCirclesOnRing;

      // Place circles on this ring
      for (
        let i = 0;
        i < maxCirclesOnRing && circleIndex < circles.length;
        i++
      ) {
        const circle = circles[circleIndex];
        const angle = i * angleStep;

        circle.targetX = centerX + this.p5.cos(angle) * radius;
        circle.targetY = centerY + this.p5.sin(angle) * radius;

        // Apply pulsing animation if pulseIntensity > 0
        if (pulseIntensity > 0) {
          // Use sine wave with randomized offset per circle for variety
          const randomOffset = circleIndex * 2.7; // Prime-like number for pseudo-random distribution
          const randomSpeed = 1 + (circleIndex % 7) * 0.15; // Vary speed per circle
          const pulse =
            this.p5.sin(time * pulseSpeed * randomSpeed + randomOffset) *
            pulseAmount;
          const targetSize = baseSize + pulse;
          // Smoothly interpolate towards target size
          circle.size += (targetSize - circle.size) * smoothing;
        } else {
          // No pulse, use fixed size
          circle.size = baseSize;
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
}
