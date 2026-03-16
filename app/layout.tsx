import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body className={`${inter.className} bg-violet-50 text-gray-800`}>
        {/* Navbar */}
        <nav className="sticky top-0 z-10 flex justify-between items-center px-8 py-4 bg-white border-b border-violet-100 shadow-sm">
          <div className="text-xl font-bold text-violet-500">D-Kub</div>
          <ul className="flex gap-8">
            <li><Link href="/" className="text-gray-600 hover:text-violet-500 transition-colors font-medium">Home</Link></li>
            <li><Link href="/aboutme" className="text-gray-600 hover:text-violet-500 transition-colors font-medium">About</Link></li>
            <li><Link href="/product" className="text-gray-600 hover:text-violet-500 transition-colors font-medium">Projects</Link></li>
            <li><Link href="/lab" className="text-gray-600 hover:text-violet-500 transition-colors font-medium">The Lab</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-violet-500 transition-colors font-medium">Contact</Link></li>
          </ul>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="text-center py-6 text-gray-400 text-sm border-t border-violet-100 bg-white">
          © 2026 D-Kub · Built with Next.js
        </footer>
      </body>
    </html>
  );
}