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
    English: {
      label: "News",
      labelFormatted: {
        firstLine: "News",
        secondLine: null,
        position: "top",
      },
    },
    Korean: {
      label: "KO_News",
    },
    Japanese: {
      label: "JA_News",
    },
    Chinese: {
      label: "ZH_News",
    },
    icon: "news",
    quadrant: "bottom-left",
  },
  Gaming: {
    English: {
      label: "Gaming",
    },
    Korean: {
      label: "KO_Gaming",
    },
    Japanese: {
      label: "JA_Gaming",
    },
    Chinese: {
      label: "ZH_Gaming",
    },
    icon: "gaming",
    quadrant: "top-left",
  },
  "Gen AI": {
    English: {
      label: "Gen AI",
    },
    Korean: {
      label: "KO_Gen AI",
    },
    Japanese: {
      label: "JA_Gen AI",
    },
    Chinese: {
      label: "ZH_Gen AI",
    },
    icon: "gen_ai",
    quadrant: "top-left",
  },
  Education: {
    English: {
      label: "Education",
    },
    Korean: {
      label: "KO_Education",
    },
    Japanese: {
      label: "JA_Education",
    },
    Chinese: {
      label: "ZH_Education",
    },
    icon: "education",
    quadrant: "bottom-left",
  },
  Travel: {
    English: {
      label: "Travel",
    },
    Korean: {
      label: "KO_Travel",
    },
    Japanese: {
      label: "JA_Travel",
    },
    Chinese: {
      label: "ZH_Travel",
    },
    icon: "travel",
    quadrant: "bottom-left",
  },
  "Auto Marketplaces": {
    English: {
      label: "Auto Marketplace",
      labelFormatted: {
        firstLine: "Auto",
        secondLine: "Marketplaces",
        position: "top",
      },
    },
    Korean: {
      label: "KO_Auto Marketplace",
    },
    Japanese: {
      label: "JA_Auto Marketplace",
    },
    Chinese: {
      label: "ZH_Auto Marketplace",
    },
    icon: "auto_marketplace",
    quadrant: "bottom-left",
  },
  "Retail & eCommerce": {
    English: {
      label: "Retail & eCommerce",
      labelFormatted: {
        firstLine: "Retail &",
        secondLine: "eCommerce",
      },
    },
    Korean: {
      label: "KO_Retail & eCommerce",
    },
    Japanese: {
      label: "JA_Retail & eCommerce",
    },
    Chinese: {
      label: "ZH_Retail & eCommerce",
    },
    icon: "ecommerce_retail",
    quadrant: "bottom-left",
  },
  "Health & Fitness": {
    English: {
      label: "Health & Fitness",
      labelFormatted: {
        firstLine: "Health &",
        secondLine: "Fitness",
      },
    },
    Korean: {
      label: "KO_Health & Fitness",
    },
    Japanese: {
      label: "JA_Health & Fitness",
    },
    Chinese: {
      label: "ZH_Health & Fitness",
    },
    icon: "health_fitness",
    quadrant: "bottom-left",
  },
  FinTech: {
    English: {
      label: "FinTech",
    },
    Korean: {
      label: "KO_FinTech",
    },
    Japanese: {
      label: "JA_FinTech",
    },
    Chinese: {
      label: "ZH_FinTech",
    },
    icon: "fintech",
    quadrant: "top-right",
  },
  "On-Demand Services": {
    English: {
      label: "On-Demand",
      labelFormatted: {
        firstLine: "On-Demand",
        secondLine: "Services",
      },
    },
    Korean: {
      label: "KO_On-Demand Services",
    },
    Japanese: {
      label: "JA_On-Demand Services",
    },
    Chinese: {
      label: "ZH_On-Demand Services",
    },
    icon: "on_demand",
    quadrant: "top-right",
  },
  "Financial Services": {
    English: {
      label: "Financial Services",
      labelFormatted: {
        firstLine: "Financial",
        secondLine: "Services",
      },
    },
    Korean: {
      label: "KO_Financial Services",
    },
    Japanese: {
      label: "JA_Financial Services",
    },
    Chinese: {
      label: "ZH_Financial Services",
    },
    icon: "finance",
    quadrant: "top-right",
  },
  "Media & Streaming": {
    English: {
      label: "Media & Streaming",
      labelFormatted: {
        firstLine: "Media &",
        secondLine: "Streaming",
        position: "top",
      },
    },
    Korean: {
      label: "KO_Media & Streaming",
    },
    Japanese: {
      label: "JA_Media & Streaming",
    },
    Chinese: {
      label: "ZH_Media & Streaming",
    },
    icon: "media_streaming",
    quadrant: "top-right",
  },
  Dating: {
    English: {
      label: "Dating",
    },
    Korean: {
      label: "KO_Dating",
    },
    Japanese: {
      label: "JA_Dating",
    },
    Chinese: {
      label: "ZH_Dating",
    },
    icon: "dating",
    quadrant: "top-left",
  },
  "Auto OEMs": {
    English: {
      label: "Auto OEMs",
      labelFormatted: {
        firstLine: "Auto",
        secondLine: "OEMs",
        position: "top",
      },
    },
    Korean: {
      label: "KO_Auto OEMs",
    },
    Japanese: {
      label: "JA_Auto OEMs",
    },
    Chinese: {
      label: "ZH_Auto OEMs",
    },
    icon: "auto_oems",
    quadrant: "top-right",
  },
  Social: {
    English: {
      label: "Social",
    },
    Korean: {
      label: "KO_Social",
    },
    Japanese: {
      label: "JA_Social",
    },
    Chinese: {
      label: "ZH_Social",
    },
    icon: "social",
    quadrant: "top-right",
  },
  Productivity: {
    English: {
      label: "Productivity",
    },
    Korean: {
      label: "KO_Productivity",
    },
    Japanese: {
      label: "JA_Productivity",
    },
    Chinese: {
      label: "ZH_Productivity",
    },
    icon: "productivity",
    quadrant: "bottom-right",
  },
  "Casino & Sports betting (RMG)": {
    English: {
      label: "Casino & Sports betting (RMG)",
      labelFormatted: {
        firstLine: "Casino & Sports",
        secondLine: "betting (RMG)",
      },
    },
    Korean: {
      label: "KO_Casino & Sports betting (RMG)",
    },
    Japanese: {
      label: "JA_Casino & Sports betting (RMG)",
    },
    Chinese: {
      label: "ZH_Casino & Sports betting (RMG)",
    },
    icon: "rmg",
    quadrant: "top-left",
  },
  "All verticals": {
    English: {
      label: "All verticals",
    },
    Korean: {
      label: "KO_All verticals",
    },
    Japanese: {
      label: "JA_All verticals",
    },
    Chinese: {
      label: "ZH_All verticals",
    },
    icon: "all_verticals",
    // quadrant: "center",
  },
};
