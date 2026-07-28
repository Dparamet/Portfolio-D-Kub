import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/app/components/FloatingNav";
import PreferenceControls from "@/app/components/PreferenceControls";
import { SitePreferencesProvider } from "@/app/components/SitePreferencesProvider";

const inter = Inter({ subsets: ["latin"] });
const siteDescription =
  "Portfolio of Paramet Dennis Hoke Arrington IV, featuring full-stack development, IoT, WordPress, POS, work experience, and contact information.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-d-kub.vercel.app"),
  title: "Portfolio D-Kub",
  description: siteDescription,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Portfolio D-Kub",
    description: siteDescription,
    type: "website",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary",
    title: "Portfolio D-Kub",
    description: siteDescription,
    images: ["/icon.png"],
  },
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
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-zinc-900 focus:border focus:border-sky-400/60 focus:px-3 focus:py-2 focus:text-sm focus:text-zinc-100"
          >
            Skip to content
          </a>

          <a
            href="#home"
            aria-label="Portfolio D-Kub home"
            className="fixed left-4 top-4 z-50 overflow-hidden rounded-xl border border-sky-400/40 bg-black shadow-lg shadow-sky-900/30 transition-transform hover:scale-105 focus-visible:scale-105"
          >
            <Image
              src="/icon.png"
              alt=""
              width={48}
              height={48}
              priority
              className="h-12 w-12 object-cover"
            />
          </a>

          <PreferenceControls />
          <FloatingNav />

          <main id="main-content" className="pb-24 md:pb-0">{children}</main>
        </SitePreferencesProvider>
      </body>
    </html>
  );
}
