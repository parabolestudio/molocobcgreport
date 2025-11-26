import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";

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
        <DevLinkProvider>
          {/* Add here any Navbar or Header you want to be present on all pages */}
          {children}
          {/* Add here any Footer you want to be present on all pages */}
        </DevLinkProvider>
      </body>
    </html>
  );
}
