"use client";

import { ReactNode, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { CopyProvider } from "@/contexts/CopyContext";
import { copyData, type CopyData } from "@/data/copyData";

type LocaleCode = "JA" | "KO" | "ZH" | "EN";
type LanguageName = "English" | "Japanese" | "Korean" | "Chinese";

export function mapLocaleToLanguage(locale: string | null): LanguageName {
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

export function LocaleProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();

  const selectedCopy = useMemo(() => {
    const locale = searchParams?.get("locale");
    const language = mapLocaleToLanguage(locale);
    const data = copyData[language] as CopyData;

    // if (locale) {
    //   console.log(`Loading copy for locale: ${locale} (${language})`);
    // }

    return data;
  }, [searchParams]);

  return <CopyProvider data={selectedCopy}>{children}</CopyProvider>;
}
