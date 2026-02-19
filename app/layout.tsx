import type { Metadata } from "next";
import Link from "next/link";
import { Inter, JetBrains_Mono, PT_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "gaurav cherwal - ai'ops/linux/backend",
  description: "archive of an ai/backend engineer focused on reliable production systems.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable} ${ptSerif.variable} antialiased`}>
        <div className="min-h-screen bg-[#0b0f10] text-[#d7e3db]">
          <header className="sticky top-0 z-50 border-b border-[#1f2b25] bg-[#0d1312]/95 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
              <Link href="/" className="font-mono text-sm font-semibold tracking-wide text-[#c6f6d5]">
                gaurav@archive:~$
              </Link>
              <nav className="flex items-center gap-5 font-mono text-sm text-[#a8b8af]">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-[#8ad69f]">
                    ./{item.label.toLowerCase()}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          {children}

          <footer className="border-t border-[#1f2b25]">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-sm text-[#7ea58f] md:flex-row md:items-center md:justify-between md:px-8">
              <p>status: building reliable AI backend systems</p>
              <p>© {new Date().getFullYear()} gaurav.cherwal</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
