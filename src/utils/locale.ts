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
  { title: string; description: string }
> = {
  English: {
    title: "The AI Disruption Index",
    description: "Report by Moloco and BCG",
  },
  Japanese: {
    title: "AI ディスラプションインデックス",
    description: "Report by MolocoおよびBCG",
  },
  Korean: {
    title: "AI 시대, 변화하는 고객 여정과 새로운 기회",
    description: "리포트 Moloco 및 BCG",
  },
  Chinese: {
    title: "AI 颠覆指数报告",
    description: "联合发布 Moloco 和 BCG。",
  },
};
