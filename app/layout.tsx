import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // นำเข้าตัวช่วยทำ Link

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
      <body className={`${inter.className} bg-slate-900 text-white`}>
        {/* --- เริ่ม Navbar ตามรูปที่นายวาด --- */}
        <nav className="flex justify-between items-center p-6 bg-slate-800 border-b border-slate-700">
          <div className="text-xl font-bold text-cyan-400">PORTFOLIO</div>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link href="/aboutme" className="hover:text-cyan-400">About Me</Link></li>
            <li><Link href="/product" className="hover:text-cyan-400">Product</Link></li>
            <li><Link href="/lab" className="hover:text-cyan-400">The Lab</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </nav>
        {/* --- จบ Navbar --- */}

        <main className="min-h-screen">
          {children} {/* ข้อมูลจากหน้า page.tsx จะมาโผล่ตรงนี้ */}
        </main>
      </body>
    </html>
  );
}