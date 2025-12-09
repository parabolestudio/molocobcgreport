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

export interface ClusterConfig {
  enabled: boolean; // Enable/disable cluster animation
  noiseScale: number; // Size of clusters (0.05 = large, 0.3 = small) - Default: 0.15
  animationSpeed: number; // Speed of cluster movement (0.0001 = slow, 0.001 = fast) - Default: 0.0003
  minSize: number; // Size of non-cluster circles - Default: 3
  maxSize: number; // Maximum size of cluster circles - Default: 12
  threshold: number; // Noise threshold for cluster (0.4 = more clusters, 0.6 = fewer) - Default: 0.5
  smoothing: number; // Size transition smoothness (0.05 = smooth, 0.3 = snappy) - Default: 0.1
}

// Cluster Configuration
// enabled (boolean) - Turn cluster animation on/off
// Default: true

// noiseScale (number) - Controls cluster size
// 0.05 = Large clusters (screen-wide)
// 0.15 = Medium clusters (default)
// 0.3 = Small clusters

// animationSpeed (number) - How fast clusters move/pulse
// 0.0001 = Very slow
// 0.0003 = Medium (default)
// 0.001 = Fast

// minSize (number) - Size of circles outside clusters
// Default: 3

// maxSize (number) - Maximum size of circles in cluster centers
// Default: 12

// threshold (number) - How many clusters appear (0-1)
// 0.4 = More clusters, more circles are large
// 0.5 = Balanced (default)
// 0.6 = Fewer clusters, more tiny circles

// smoothing (number) - How smoothly circles grow/shrink
// 0.05 = Very smooth, slow transitions
// 0.1 = Smooth (default)
// 0.3 = Snappy, quick transitions

export class CircleGrid {
  circles: Circle[] = [];
  cols: number;
  rows: number;
  spacing: number;
  noiseTimeOffset: number = 0;

  // Cluster animation configuration
  clusterConfig: ClusterConfig = {
    enabled: true,
    noiseScale: 0.05,
    animationSpeed: 0.015,
    minSize: 2,
    maxSize: 36,
    threshold: 0.55,
    smoothing: 0.25,
  };

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

  update() {
    // Update noise time offset for animated clusters
    if (this.clusterConfig.enabled) {
      this.noiseTimeOffset += this.clusterConfig.animationSpeed;

      // Update target sizes based on noise clusters
      this.circles.forEach((circle, index) => {
        const row = Math.floor(index / this.cols);
        const col = index % this.cols;

        // Sample Perlin noise for this circle's position + time
        const noiseValue = this.p5.noise(
          col * this.clusterConfig.noiseScale,
          row * this.clusterConfig.noiseScale,
          this.noiseTimeOffset
        );

        // If noise is above threshold, make it part of a cluster (larger size)
        if (noiseValue > this.clusterConfig.threshold) {
          // Map noise value to size range
          const normalizedNoise =
            (noiseValue - this.clusterConfig.threshold) /
            (1 - this.clusterConfig.threshold);
          circle.targetSize = this.p5.lerp(
            this.clusterConfig.minSize,
            this.clusterConfig.maxSize,
            normalizedNoise
          );
        } else {
          // Not in cluster, keep minimum size
          circle.targetSize = this.clusterConfig.minSize;
        }
      });
    }

    this.circles.forEach((circle) => {
      // Smooth movement toward target position
      circle.x += (circle.targetX - circle.x) * 0.05;
      circle.y += (circle.targetY - circle.y) * 0.05;

      // Smooth size transition
      circle.size +=
        (circle.targetSize - circle.size) * this.clusterConfig.smoothing;
    });
  }

  draw(color: string = "255, 255, 255") {
    this.circles.forEach((circle) => {
      this.p5.noStroke();
      this.p5.fill(`rgba(${color}, ${circle.alpha})`);
      this.p5.circle(circle.x, circle.y, circle.size);
    });
  }

  // Update cluster configuration
  setClusterConfig(config: Partial<ClusterConfig>) {
    this.clusterConfig = { ...this.clusterConfig, ...config };
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
