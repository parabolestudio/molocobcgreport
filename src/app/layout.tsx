import type { Metadata } from "next";
import { MuseoModerno, Montserrat } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { LocaleProvider } from "@/contexts/LocaleProvider";
import { Suspense } from "react";

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moloco.com/"),
  title: "The AI Disruption Index",
  description: "Report by Moloco and BCG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WM7MN68');`,
          }}
        />
      </head>
      <body
        className={`${museoModerno.variable} ${montserrat.variable} antialiased bg-[#0F0E45]`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WM7MN68"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Suspense fallback={null}>
          <LocaleProvider>
            <DevLinkProvider>
              {/* Add here any Navbar or Header you want to be present on all pages */}
              {children}
              {/* Add here any Footer you want to be present on all pages */}
            </DevLinkProvider>
          </LocaleProvider>
        </Suspense>
      </body>
    </html>
  );
}
