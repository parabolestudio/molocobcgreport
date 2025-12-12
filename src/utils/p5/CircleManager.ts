import type P5 from "p5";

export interface Circle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  targetSize: number;
  alpha: number;
}

/**
 * CircleManager manages the circles array and provides basic update/draw functionality.
 * Formations are now handled by separate Formation classes.
 */
export class CircleManager {
  circles: Circle[] = [];

  constructor(private p5: P5) {}

  update() {
    this.circles.forEach((circle) => {
      // Smooth movement toward target position
      circle.x += (circle.targetX - circle.x) * 0.05;
      circle.y += (circle.targetY - circle.y) * 0.05;
    });
  }

  draw(color: string = "255, 255, 255") {
    this.circles.forEach((circle) => {
      this.p5.noStroke();
      this.p5.fill(`rgba(${color}, ${circle.alpha})`);
      this.p5.circle(circle.x, circle.y, circle.size);
    });
  }

  // Instantly snap circles to their target positions (no smooth transition)
  snapToTargets() {
    this.circles.forEach((circle) => {
      circle.x = circle.targetX;
      circle.y = circle.targetY;
    });
  }
}
