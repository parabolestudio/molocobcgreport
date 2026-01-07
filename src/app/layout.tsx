import type { Metadata } from "next";
import { MuseoModerno, Montserrat } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
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
      <body
        className={`${museoModerno.variable} ${montserrat.variable} antialiased bg-[#0F0E45]`}
      >
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
