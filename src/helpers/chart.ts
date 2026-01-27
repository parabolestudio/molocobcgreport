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
      label: "ニュース",
    },
    Chinese: {
      label: "新闻",
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
      label: "ゲーム",
    },
    Chinese: {
      label: "游戏",
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
      label: "生成AI",
    },
    Chinese: {
      label: "生成式 AI",
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
      label: "教育",
    },
    Chinese: {
      label: "教育",
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
      label: "旅行",
    },
    Chinese: {
      label: "旅游",
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
      label: "自動車マーケットプレイス",
    },
    Chinese: {
      label: "汽车交易平台",
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
      label: "小売・Eコマース",
    },
    Chinese: {
      label: "零售与电商",
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
      label: "ヘルス＆フィットネス",
    },
    Chinese: {
      label: "健康与健身",
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
      label: "フィンテック",
    },
    Chinese: {
      label: "金融科技",
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
      label: "オンデマンドサービス（配送、ライドサービス、ファーストフード）",
    },
    Chinese: {
      label: "即时需求服务（配送、出行、快餐）",
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
      label: "ファイナンスサービス",
    },
    Chinese: {
      label: "金融服务",
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
      label: "メディア＆ストリーミング",
    },
    Chinese: {
      label: "媒体与流媒体",
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
      label: "マッチング",
    },
    Chinese: {
      label: "交友",
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
      label: "自動車メーカー",
    },
    Chinese: {
      label: "汽车主机厂",
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
      label: "SNS",
    },
    Chinese: {
      label: "社交媒体",
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
      label: "生産性ツール",
    },
    Chinese: {
      label: "效率工具",
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
      label: "カジノ・スポーツベッティング（RMG）",
    },
    Chinese: {
      label: "赌场与体育博彩（真实货币博彩）",
    },
    icon: "rmg",
    quadrant: "top-left",
  },
  "All verticals": {
    English: {
      label: "All verticals",
    },
    Korean: {
      label: "전체 산업군",
    },
    Japanese: {
      label: "すべての業界",
    },
    Chinese: {
      label: "所有垂直行业",
    },
    icon: "all_verticals",
    // quadrant: "center",
  },
};
