import type P5 from "p5";
import type { Circle } from "../CircleManager";
import type { Formation } from "./Formation";

export interface GridFormationConfig {
  spacing: number;
  // Cluster animation configuration
  clusterEnabled: boolean;
  noiseScale: number; // Size of clusters (0.05 = large, 0.3 = small) - Default: 0.15
  animationSpeed: number; // Speed of cluster movement (0.0001 = slow, 0.001 = fast) - Default: 0.0003
  minSize: number; // Size of non-cluster circles - Default: 3
  maxSize: number; // Maximum size of cluster circles - Default: 12
  threshold: number; // Noise threshold for cluster (0.4 = more clusters, 0.6 = fewer) - Default: 0.5
  smoothing: number; // Size transition smoothness (0.05 = smooth, 0.3 = snappy) - Default: 0.1
}

/**
 * Grid formation with optional cluster animation using Perlin noise.
 */
export class GridFormation implements Formation {
  private noiseTimeOffset: number = 0;
  private config: GridFormationConfig;
  private cols: number = 0;
  private rows: number = 0;

  constructor(config?: Partial<GridFormationConfig>) {
    this.config = {
      spacing: 20,
      clusterEnabled: true,
      noiseScale: 0.05,
      animationSpeed: 0.015,
      minSize: 2,
      maxSize: 36,
      threshold: 0.55,
      smoothing: 0.25,
      ...config,
    };
  }

  /**
   * Initialize circles in a grid pattern
   */
  initialize(circles: Circle[], p5: P5): void {
    const { spacing } = this.config;

    // Calculate cols and rows based on screen size
    this.cols = Math.ceil(p5.width / spacing) + 1;
    this.rows = Math.ceil(p5.height / spacing) + 1;

    // Clear existing circles and create new grid
    circles.length = 0;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const x = j * spacing;
        const y = i * spacing;

        circles.push({
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

  /**
   * Apply grid formation with cluster animation
   */
  apply(circles: Circle[], p5: P5, time: number): void {
    if (this.config.clusterEnabled) {
      this.noiseTimeOffset += this.config.animationSpeed;

      // Update target sizes based on noise clusters
      circles.forEach((circle, index) => {
        const row = Math.floor(index / this.cols);
        const col = index % this.cols;

        // Sample Perlin noise for this circle's position + time
        const noiseValue = p5.noise(
          col * this.config.noiseScale,
          row * this.config.noiseScale,
          this.noiseTimeOffset
        );

        // If noise is above threshold, make it part of a cluster (larger size)
        if (noiseValue > this.config.threshold) {
          const normalizedNoise =
            (noiseValue - this.config.threshold) / (1 - this.config.threshold);
          circle.targetSize = p5.lerp(
            this.config.minSize,
            this.config.maxSize,
            normalizedNoise
          );
        } else {
          circle.targetSize = this.config.minSize;
        }
      });
    }

    // Smooth size transition
    circles.forEach((circle) => {
      circle.size += (circle.targetSize - circle.size) * this.config.smoothing;
    });
  }

  /**
   * Update configuration
   */
  setConfig(config: Partial<GridFormationConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Handle window resize
   */
  resize(circles: Circle[], p5: P5): void {
    const newCols = Math.ceil(p5.width / this.config.spacing) + 1;
    const newRows = Math.ceil(p5.height / this.config.spacing) + 1;

    // If dimensions changed, reinitialize the grid
    if (newCols !== this.cols || newRows !== this.rows) {
      this.initialize(circles, p5);
    } else {
      // Just update positions if grid size is the same
      circles.forEach((circle, index) => {
        const row = Math.floor(index / this.cols);
        const col = index % this.cols;
        circle.targetX = col * this.config.spacing;
        circle.targetY = row * this.config.spacing;
      });
    }
  }
}
