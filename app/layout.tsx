import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MobileCallBar from "@/components/mobile-call-bar";
import { baseMetadata } from "@/lib/site";
import "./globals.css";

const headingFont = Inter_Tight({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased overflow-x-hidden`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var stored=localStorage.getItem('theme');var prefers=window.matchMedia('(prefers-color-scheme: dark)').matches;var dark=stored?stored==='dark':prefers;document.documentElement.classList.toggle('dark',dark);}catch(e){document.documentElement.classList.add('dark')}})();`,
          }}
        />
        <a
          href="#main-content"
          className="sr-only z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b0d12] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
        >
          Skip to main content
        </a>
        <div aria-hidden className="noise-overlay fixed inset-0 -z-10" />
        <div className="flex min-h-[100dvh] flex-col overflow-x-hidden w-full relative">
          <Header />
          <main id="main-content" className="flex-1 w-full relative">
            {children}
          </main>
          <Footer />
          <MobileCallBar />
        </div>
      </body>
    </html>
  );
}
