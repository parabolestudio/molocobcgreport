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
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: meta.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.twitterImage,
          alt: meta.imageAlt,
        },
      ],
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
