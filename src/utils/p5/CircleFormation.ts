import type P5 from "p5";
import type { Circle } from "./CircleGrid";

export class CircleFormation {
  constructor(private p5: P5) {}

  // Arrange circles in concentric rings
  applyRings(
    circles: Circle[],
    centerX: number,
    centerY: number,
    arcSpacing: number = 30, // Arc length spacing between circles (in pixels)
    innerRadius: number = 260 // Starting radius for the first ring
  ) {
    const ringsCount = 5;
    const radiusStep = 20;
    const fixedSize = 12; // Fixed size for all circles in rings formation

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
        // Set initial size, but don't touch targetSize (will be set by pulse animation)
        circle.size = fixedSize;

        circleIndex++;
      }
    }

    // Hide all unused circles
    for (let i = circleIndex; i < circles.length; i++) {
      circles[i].targetSize = 0;
      circles[i].size = 0;
    }
  }

  // Apply subtle pulsing animation to rings
  applyRingsPulse(circles: Circle[], time: number) {
    const baseSize = 18; // Base size for rings
    const pulseSpeed = 0.0025; // Speed of the pulse
    const pulseAmount = 6; // How much bigger/smaller (in pixels)
    const smoothing = 0.15; // Smoothing factor for size transition

    circles.forEach((circle, i) => {
      // Only pulse circles that are visible (part of the rings)
      // Check size instead of targetSize since we're not setting targetSize in applyRings anymore
      if (circle.size > 0) {
        // Use sine wave with randomized offset per circle for variety
        // Multiply index by larger values to create more randomness
        const randomOffset = i * 2.7; // Prime-like number for pseudo-random distribution
        const randomSpeed = 1 + (i % 7) * 0.15; // Vary speed per circle
        const pulse =
          this.p5.sin(time * pulseSpeed * randomSpeed + randomOffset) *
          pulseAmount;
        const targetSize = baseSize + pulse;
        // Smoothly interpolate towards target size
        circle.size += (targetSize - circle.size) * smoothing;
      }
    });
  }
}
