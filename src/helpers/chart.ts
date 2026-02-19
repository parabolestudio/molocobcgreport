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
      label: "뉴스",
      labelFormatted: {
        firstLine: "뉴스",
        secondLine: null,
        position: "top",
      },
    },
    Japanese: {
      label: "ニュース",
      labelFormatted: {
        firstLine: "ニュース",
        secondLine: null,
        position: "top",
      },
    },
    Chinese: {
      label: "新闻",
      labelFormatted: {
        firstLine: "新闻",
        secondLine: null,
        position: "top",
      },
    },
    icon: "news",
    quadrant: "bottom-left",
  },
  Gaming: {
    English: {
      label: "Gaming",
    },
    Korean: {
      label: "게임",
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
      label: "Gen AI",
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
      label: "교육",
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
      label: "여행",
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
      // label: "Auto Marketplace",
      labelFormatted: {
        firstLine: "Auto",
        secondLine: "Marketplaces",
        position: "top",
      },
    },
    Korean: {
      // label: "자동차 마켓플레이스",
      labelFormatted: {
        firstLine: "자동차 마켓플레이스",
        secondLine: "",
        position: "top",
      },
    },
    Japanese: {
      // label: "自動車マーケットプレイス",
      labelFormatted: {
        firstLine: "自動車",
        secondLine: "マーケットプレイス",
        position: "top",
      },
    },
    Chinese: {
      // label: "汽车交易平台",
      labelFormatted: {
        firstLine: "汽车交易平台",
        secondLine: "",
        position: "top",
      },
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
      label: "리테일 및 이커머스",
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
      label: "건강 및 피트니스",
    },
    Japanese: {
      // label: "ヘルス＆フィットネス",
      labelFormatted: {
        firstLine: "ヘルス＆",
        secondLine: "フィットネス",
      },
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
      label: "핀테크",
    },
    Japanese: {
      label: "フィンテック",
    },
    Chinese: {
      label: "金融科技",
      labelFormatted: {
        firstLine: "金融科技",
        secondLine: "",
        position: "top",
      },
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
      label: "온디맨드 서비스",
    },
    Japanese: {
      label: "オンデマンドサービス",
      labelFormatted: {
        firstLine: "オンデマンド",
        secondLine: "サービス",
      },
    },
    Chinese: {
      label: "即时需求服务",
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
      label: "금융 서비스",
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
      // label: "Media & Streaming",
      labelFormatted: {
        firstLine: "Media &",
        secondLine: "Streaming",
        position: "top",
      },
    },
    Korean: {
      // label: "미디어 및 스트리밍",
      labelFormatted: {
        firstLine: "미디어 및 스트리밍",
        secondLine: "",
        position: "top",
      },
    },
    Japanese: {
      // label: "メディア＆ストリーミング",
      labelFormatted: {
        firstLine: "メディア＆",
        secondLine: "ストリーミング",
        position: "top",
      },
    },
    Chinese: {
      // label: "媒体与流媒体",
      labelFormatted: {
        firstLine: "媒体与流媒体",
        secondLine: "",
        position: "top",
      },
    },
    icon: "media_streaming",
    quadrant: "top-right",
  },
  Dating: {
    English: {
      label: "Dating",
    },
    Korean: {
      label: "데이팅",
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
      label: "자동차 OEM",
      labelFormatted: {
        firstLine: "자동차 OEM",
        secondLine: "",
        position: "top",
      },
    },
    Japanese: {
      label: "自動車メーカー",
      labelFormatted: {
        firstLine: "自動車メーカー",
        secondLine: "",
        position: "top",
      },
    },
    Chinese: {
      label: "汽车主机厂",
      labelFormatted: {
        firstLine: "汽车主机厂",
        secondLine: "",
        position: "top",
      },
    },
    icon: "auto_oems",
    quadrant: "top-right",
  },
  Social: {
    English: {
      label: "Social",
    },
    Korean: {
      label: "소셜 미디어",
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
      label: "생산성",
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
      // label: "Casino & Sports betting (RMG)",
      labelFormatted: {
        firstLine: "Casino & Sports",
        secondLine: "betting (RMG)",
      },
    },
    Korean: {
      label: "카지노 및 스포츠 베팅(RMG)",
    },
    Japanese: {
      // label: "カジノ・スポーツベッティング（RMG）",
      labelFormatted: {
        firstLine: "カジノ・スポーツ",
        secondLine: "ベッティング（RMG）",
      },
    },
    Chinese: {
      // label: "赌场与体育博彩（真实货币博彩）",
      labelFormatted: {
        firstLine: "赌场与体育博彩",
        secondLine: "（真实货币博彩）",
      },
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
