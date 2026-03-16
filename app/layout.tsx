import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/app/components/FloatingNav";
import PreferenceControls from "@/app/components/PreferenceControls";
import { SitePreferencesProvider } from "@/app/components/SitePreferencesProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio D-Kub",
  description: "This is my personal Portfolio and my works that i made",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <SitePreferencesProvider>
          <a
            href="#hero"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-zinc-900 focus:border focus:border-sky-400/60 focus:px-3 focus:py-2 focus:text-sm focus:text-zinc-100"
          >
            Skip to content
          </a>

          <PreferenceControls />
          <FloatingNav />

          <main id="main-content" className="pb-24 md:pb-0">{children}</main>
        </SitePreferencesProvider>
      </body>
    </html>
  );
}