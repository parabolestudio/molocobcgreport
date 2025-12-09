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

export class CircleGrid {
  circles: Circle[] = [];
  cols: number;
  rows: number;
  spacing: number;
  noiseScale: number = 0.15; // Increased to make clusters smaller (about 1/3 screen width)
  noiseTimeOffset: number = 0;

  constructor(private p5: P5, spacing: number = 20) {
    this.spacing = spacing;
    // Calculate cols and rows based on screen size and spacing
    this.cols = Math.ceil(this.p5.width / spacing) + 1;
    this.rows = Math.ceil(this.p5.height / spacing) + 1;
    this.initializeGrid();
  }

  initializeGrid() {
    this.circles = [];

    // Recalculate cols and rows based on current dimensions
    this.cols = Math.ceil(this.p5.width / this.spacing) + 1;
    this.rows = Math.ceil(this.p5.height / this.spacing) + 1;

    // Start from top-left corner, no centering needed as we fill the entire screen
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const x = j * this.spacing;
        const y = i * this.spacing;

        this.circles.push({
          x,
          y,
          targetX: x,
          targetY: y,
          size: 3,
          targetSize: 3,
          alpha: 0.6,
        });
      }
    }
  }

  update(time: number, pulseIntensity: number = 3.0) {
    this.circles.forEach((circle) => {
      // Smooth movement toward target
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

  resize(width: number, height: number) {
    // Recalculate cols and rows based on new dimensions
    const newCols = Math.ceil(width / this.spacing) + 1;
    const newRows = Math.ceil(height / this.spacing) + 1;

    // If dimensions changed, reinitialize the grid
    if (newCols !== this.cols || newRows !== this.rows) {
      this.cols = newCols;
      this.rows = newRows;
      this.initializeGrid();
    } else {
      // Just update positions if grid size is the same
      this.circles.forEach((circle, index) => {
        const row = Math.floor(index / this.cols);
        const col = index % this.cols;
        circle.targetX = col * this.spacing;
        circle.targetY = row * this.spacing;
      });
    }
  }
}
