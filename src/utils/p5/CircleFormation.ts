import type P5 from "p5";
import type { Circle } from "./CircleGrid";

export class CircleFormation {
  constructor(private p5: P5) {}

  // Arrange circles in a spiral pattern
  applySpiral(circles: Circle[], centerX: number, centerY: number) {
    const angleStep = (this.p5.TWO_PI / circles.length) * 3;
    const radiusStep = 4;

    circles.forEach((circle, i) => {
      const angle = i * angleStep;
      const radius = radiusStep * i;
      circle.targetX = centerX + this.p5.cos(angle) * radius;
      circle.targetY = centerY + this.p5.sin(angle) * radius;
    });
  }

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
    const fixedSize = 6; // Fixed size for all circles in rings formation

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
        circle.targetSize = fixedSize; // Set fixed size for rings

        circleIndex++;
      }
    }

    // Hide all unused circles
    for (let i = circleIndex; i < circles.length; i++) {
      circles[i].targetSize = 0;
    }
  }

  // Arrange circles in quadrant positions (for quadrant section)
  applyQuadrants(circles: Circle[], width: number, height: number) {
    const quadrants = [
      { x: width * 0.25, y: height * 0.25 }, // Top-left
      { x: width * 0.75, y: height * 0.25 }, // Top-right
      { x: width * 0.25, y: height * 0.75 }, // Bottom-left
      { x: width * 0.75, y: height * 0.75 }, // Bottom-right
    ];

    const circlesPerQuadrant = Math.ceil(circles.length / 4);

    circles.forEach((circle, i) => {
      const quadrantIndex = Math.floor(i / circlesPerQuadrant);
      const positionInQuadrant = i % circlesPerQuadrant;

      if (quadrantIndex < 4) {
        const quadrant = quadrants[quadrantIndex];
        const angle =
          (positionInQuadrant / circlesPerQuadrant) * this.p5.TWO_PI;
        const radius = 60 + (positionInQuadrant % 3) * 30;

        circle.targetX = quadrant.x + this.p5.cos(angle) * radius;
        circle.targetY = quadrant.y + this.p5.sin(angle) * radius;
      }
    });
  }

  // Converge circles to center (for closure section)
  applyConverge(
    circles: Circle[],
    centerX: number,
    centerY: number,
    spread: number = 50
  ) {
    circles.forEach((circle) => {
      circle.targetX = centerX + this.p5.random(-spread, spread);
      circle.targetY = centerY + this.p5.random(-spread, spread);
      circle.targetSize = this.p5.random(4, 12);
    });
  }

  // Wave pattern (for journey section)
  applyWave(circles: Circle[], width: number, height: number, time: number) {
    const cols = Math.ceil(Math.sqrt(circles.length));
    const spacing = width / (cols + 1);

    circles.forEach((circle, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = (col + 1) * spacing;
      const waveOffset =
        this.p5.sin((x / width) * this.p5.TWO_PI + time * 0.001) * 100;

      circle.targetX = x;
      circle.targetY =
        height / 2 +
        waveOffset +
        (row - Math.floor(circles.length / cols) / 2) * 40;
    });
  }
}
