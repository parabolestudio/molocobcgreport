export type ChartMode =
  | "expl-y-axis"
  | "expl-x-axis"
  | "expl-quadrant-1"
  | "expl-quadrant-2"
  | "expl-quadrant-3"
  | "expl-quadrant-4"
  | "data-filled";

export function isChartModeExplanation(mode: ChartMode): boolean {
  return mode.startsWith("expl-");
}
