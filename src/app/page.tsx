import type { Metadata } from "next";
import { mapLocaleToLanguage, metadataByLanguage } from "@/utils/locale";
import ClientPage from "./ClientPage";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ locale?: string }>;
}): Promise<Metadata> {
  const { locale } = await searchParams;
  const language = mapLocaleToLanguage(locale);
  const meta = metadataByLanguage[language];

  return {
    metadataBase: new URL("https://www.moloco.com/"),
    title: meta.title,
    description: meta.description,
  };
}

export default function Page() {
  return <ClientPage />;
}
