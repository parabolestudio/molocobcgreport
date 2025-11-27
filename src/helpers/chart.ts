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

export const verticalsMap: Record<string, Object> = {
  News: {
    label: "News",
    icon: "news",
  },
  Gaming: {
    label: "Gaming",
    icon: "gaming",
  },
  "Gen AI": {
    label: "Gen AI",
    icon: "gen_ai",
  },
  Education: {
    label: "Education",
    icon: "education",
  },
  Travel: {
    label: "Travel",
    icon: "travel",
  },
  "Auto Marketplaces": {
    label: "Auto Marketplace",
    icon: "auto_marketplace",
  },
  "Retail/Ecommerce": {
    label: "Retail/Ecommerce",
    icon: "ecommerce_retail",
  },
  "Health & Fitness": {
    label: "Health & Fitness",
    icon: "health_fitness",
  },
  FinTech: {
    label: "FinTech",
    icon: "fintech",
  },
  "On-Demand Services": {
    label: "On-Demand",
    icon: "on_demand",
  },
  "Financial Services": {
    label: "Financial Services",
    icon: "finance",
  },
  "Media/Streaming": {
    label: "Media/Streaming",
    icon: "media_streaming",
  },
  Dating: {
    label: "Dating",
    icon: "dating",
  },
  "Auto OEMs": {
    label: "Auto OEMs",
    icon: "auto_oems",
  },
  Social: {
    label: "Social",
    icon: "social",
  },
  Productivity: {
    label: "Productivity",
    icon: "productivity",
  },
};
