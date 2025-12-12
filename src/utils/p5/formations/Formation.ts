import type P5 from "p5";
import type { Circle } from "../CircleManager";

/**
 * Base interface for all circle formations.
 * Each formation is responsible for arranging circles into a specific pattern.
 */
export interface Formation {
  /**
   * Apply this formation to the given circles array.
   * @param circles - The array of circles to arrange
   * @param p5 - The p5 instance
   * @param time - Current time in milliseconds (for animations)
   * @param config - Formation-specific configuration
   */
  apply(circles: Circle[], p5: P5, time: number, config?: any): void;
}
