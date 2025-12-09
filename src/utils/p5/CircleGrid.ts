import type P5 from "p5";

export interface Circle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  targetSize: number;
  pulseOffset: number;
  alpha: number;
}

export class CircleGrid {
  circles: Circle[] = [];
  cols: number;
  rows: number;
  spacing: number;

  constructor(private p5: P5, cols: number = 20, rows: number = 12) {
    this.cols = cols;
    this.rows = rows;
    // Calculate spacing to fit the grid across the viewport
    this.spacing = Math.min(
      this.p5.width / (cols - 1),
      this.p5.height / (rows - 1)
    );
    this.initializeGrid();
  }

  initializeGrid() {
    this.circles = [];

    // Calculate spacing based on window size and desired cols/rows
    this.spacing = Math.min(
      this.p5.width / (this.cols - 1),
      this.p5.height / (this.rows - 1)
    );

    // Center the grid
    const totalWidth = (this.cols - 1) * this.spacing;
    const totalHeight = (this.rows - 1) * this.spacing;
    const offsetX = (this.p5.width - totalWidth) / 2;
    const offsetY = (this.p5.height - totalHeight) / 2;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const x = offsetX + j * this.spacing;
        const y = offsetY + i * this.spacing;

        this.circles.push({
          x,
          y,
          targetX: x,
          targetY: y,
          size: 8,
          targetSize: 8,
          pulseOffset: this.p5.random(this.p5.TWO_PI),
          alpha: 0.6,
        });
      }
    }
  }

  update(time: number, pulseIntensity: number = 0.3) {
    this.circles.forEach((circle) => {
      // Smooth movement toward target
      circle.x += (circle.targetX - circle.x) * 0.05;
      circle.y += (circle.targetY - circle.y) * 0.05;

      // Pulse animation
      const pulse =
        this.p5.sin(time * 0.002 + circle.pulseOffset) * pulseIntensity;
      circle.size = circle.targetSize * (1 + pulse);
    });
  }

  draw(color: string = "255, 255, 255") {
    this.circles.forEach((circle) => {
      this.p5.noStroke();
      this.p5.fill(`rgba(${color}, ${circle.alpha})`);
      this.p5.circle(circle.x, circle.y, circle.size);
    });
  }

  resize(width: number, height: number) {
    // Recalculate spacing based on new dimensions
    this.spacing = Math.min(width / (this.cols - 1), height / (this.rows - 1));

    // Center the grid
    const totalWidth = (this.cols - 1) * this.spacing;
    const totalHeight = (this.rows - 1) * this.spacing;
    const offsetX = (width - totalWidth) / 2;
    const offsetY = (height - totalHeight) / 2;

    // Update positions
    this.circles.forEach((circle, index) => {
      const row = Math.floor(index / this.cols);
      const col = index % this.cols;
      circle.targetX = offsetX + col * this.spacing;
      circle.targetY = offsetY + row * this.spacing;
    });
  }
}
