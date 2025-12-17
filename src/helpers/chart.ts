export type ChartMode =
  | "expl-y-axis"
  | "expl-x-axis"
  | "expl-quadrant-bottom-left"
  | "expl-quadrant-top-left"
  | "expl-quadrant-bottom-right"
  | "expl-quadrant-top-right"
  | "data-filled";

export function isChartModeExplanation(mode: ChartMode): boolean {
  return mode.startsWith("expl-");
}

export const verticalsMap: Record<string, Object> = {
  News: {
    label: "News",
    labelFormatted: {
      firstLine: "News",
      secondLine: null,
      position: "top",
    },
    icon: "news",
    quadrant: "bottom-left",
  },
  Gaming: {
    label: "Gaming",
    icon: "gaming",
    quadrant: "top-left",
  },
  "Gen AI": {
    label: "Gen AI",
    icon: "gen_ai",
    quadrant: "top-left",
  },
  Education: {
    label: "Education",
    icon: "education",
    quadrant: "bottom-left",
  },
  Travel: {
    label: "Travel",
    icon: "travel",
    quadrant: "bottom-left",
  },
  "Auto Marketplaces": {
    label: "Auto Marketplace",
    labelFormatted: {
      firstLine: "Auto",
      secondLine: "Marketplaces",
      position: "top",
    },
    icon: "auto_marketplace",
    quadrant: "bottom-left",
  },
  "Retail & Ecommerce": {
    label: "Retail & Ecommerce",
    labelFormatted: {
      firstLine: "Retail &",
      secondLine: "Ecommerce",
    },
    icon: "ecommerce_retail",
    quadrant: "bottom-left",
  },
  "Health & Fitness": {
    label: "Health & Fitness",
    labelFormatted: {
      firstLine: "Health &",
      secondLine: "Fitness",
    },
    icon: "health_fitness",
    quadrant: "bottom-left",
  },
  FinTech: {
    label: "FinTech",
    icon: "fintech",
    quadrant: "top-right",
  },
  "On-Demand Services": {
    label: "On-Demand",
    labelFormatted: {
      firstLine: "On-Demand",
      secondLine: "Services",
    },
    icon: "on_demand",
    quadrant: "top-right",
  },
  "Financial Services": {
    label: "Financial Services",
    labelFormatted: {
      firstLine: "Financial",
      secondLine: "Services",
    },
    icon: "finance",
    quadrant: "top-right",
  },
  "Media & Streaming": {
    label: "Media & Streaming",
    labelFormatted: {
      firstLine: "Media &",
      secondLine: "Streaming",
      position: "top",
    },
    icon: "media_streaming",
    quadrant: "top-right",
  },
  Dating: {
    label: "Dating",
    icon: "dating",
    quadrant: "top-left",
  },
  "Auto OEMs": {
    label: "Auto OEMs",
    labelFormatted: {
      firstLine: "Auto",
      secondLine: "OEMs",
      position: "top",
    },
    icon: "auto_oems",
    quadrant: "top-right",
  },
  Social: {
    label: "Social",
    icon: "social",
    quadrant: "top-right",
  },
  Productivity: {
    label: "Productivity",
    icon: "productivity",
    quadrant: "bottom-right",
  },
  "Casino & Sports betting (RMG)": {
    label: "Casino & Sports betting (RMG)",
    labelFormatted: {
      firstLine: "Casino & Sports",
      secondLine: "betting (RMG)",
    },
    icon: "rmg",
    quadrant: "top-left",
  },
  "All verticals": {
    label: "All verticals",
    icon: "all_verticals",
    // quadrant: "center",
  },
};
