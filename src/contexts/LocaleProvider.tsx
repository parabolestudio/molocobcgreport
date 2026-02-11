"use client";

import { ReactNode, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { CopyProvider } from "@/contexts/CopyContext";
import { copyData, type CopyData } from "@/data/copyData";
import { mapLocaleToLanguage } from "@/utils/locale";

export { mapLocaleToLanguage };

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
