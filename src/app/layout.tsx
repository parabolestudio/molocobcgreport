import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { CopyProvider } from "@/contexts/CopyContext";
import { copyData } from "@/data/copyData";

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The AI Disruption Index",
  description: "A story by Moloco and BCG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${museoModerno.variable} antialiased`}>
        <CopyProvider data={copyData}>
          <DevLinkProvider>
            {/* Add here any Navbar or Header you want to be present on all pages */}
            {children}
            {/* Add here any Footer you want to be present on all pages */}
          </DevLinkProvider>
        </CopyProvider>
      </body>
    </html>
  );
}
