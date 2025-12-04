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
    labelFormatted: {
      firstLine: "Auto",
      secondLine: "Marketplace",
      position: "top",
    },
    icon: "auto_marketplace",
  },
  "Retail & Ecommerce": {
    label: "Retail & Ecommerce",
    labelFormatted: {
      firstLine: "Retail &",
      secondLine: "Ecommerce",
    },
    icon: "ecommerce_retail",
  },
  "Health & Fitness": {
    label: "Health & Fitness",
    labelFormatted: {
      firstLine: "Health &",
      secondLine: "Fitness",
    },
    icon: "health_fitness",
  },
  FinTech: {
    label: "FinTech",
    icon: "fintech",
  },
  "On-Demand Services": {
    label: "On-Demand",
    labelFormatted: {
      firstLine: "On-",
      secondLine: "Demand",
    },
    icon: "on_demand",
  },
  "Financial Services": {
    label: "Financial Services",
    labelFormatted: {
      firstLine: "Financial",
      secondLine: "Services",
    },
    icon: "finance",
  },
  "Media & Streaming": {
    label: "Media & Streaming",
    labelFormatted: {
      firstLine: "Media &",
      secondLine: "Streaming",
      position: "top",
    },
    icon: "media_streaming",
  },
  Dating: {
    label: "Dating",

    icon: "dating",
  },
  "Auto OEMs": {
    label: "Auto OEMs",
    labelFormatted: {
      firstLine: "Auto",
      secondLine: "OEMs",
      position: "top",
    },
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
  "Casino & Sports betting (RMG)": {
    label: "Casino & Sports betting (RMG)",
    labelFormatted: {
      firstLine: "Casino & Sports",
      secondLine: "betting (RMG)",
    },
    icon: "rmg",
  },
};
