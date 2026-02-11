type LocaleCode = "JA" | "KO" | "ZH" | "EN";
export type LanguageName = "English" | "Japanese" | "Korean" | "Chinese";

export function mapLocaleToLanguage(
  locale: string | null | undefined,
): LanguageName {
  if (!locale) return "English";

  const code = locale.toUpperCase() as LocaleCode;
  switch (code) {
    case "JA":
      return "Japanese";
    case "KO":
      return "Korean";
    case "ZH":
      return "Chinese";
    case "EN":
    default:
      return "English";
  }
}

/** Metadata translations keyed by language */
export const metadataByLanguage: Record<
  LanguageName,
  {
    title: string;
    description: string;
    ogImage: string;
    twitterImage: string;
    imageAlt: string;
  }
> = {
  English: {
    title: "The AI Disruption Index",
    description: "Report by Moloco and BCG",
    ogImage: "/ai-disruption-index/og/opengraph-image-en.jpg",
    twitterImage: "/og/twitter-image-en.jpg",
    imageAlt: "The AI Disruption Index by Moloco & BCG",
  },
  Japanese: {
    title: "AI ディスラプションインデックス",
    description: "Report by MolocoおよびBCG",
    ogImage: "/og/opengraph-image-ja.jpg",
    twitterImage: "/og/opengraph-image-ja.jpg",
    imageAlt: "AI ディスラプションインデックス Moloco & BCG",
  },
  Korean: {
    title: "AI 시대, 변화하는 고객 여정과 새로운 기회",
    description: "리포트 Moloco 및 BCG",
    ogImage: "/og/opengraph-image-ko.jpg",
    twitterImage: "/og/opengraph-image-ko.jpg",
    imageAlt: "AI 시대, 변화하는 고객 여정과 새로운 기회 Moloco & BCG",
  },
  Chinese: {
    title: "AI 颠覆指数报告",
    description: "联合发布 Moloco 和 BCG。",
    ogImage: "/og/opengraph-image-zh.jpg",
    twitterImage: "/og/opengraph-image-zh.jpg",
    imageAlt: "AI 颠覆指数报告 Moloco & BCG",
  },
};
