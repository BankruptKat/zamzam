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
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b0d12] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
        >
          Skip to main content
        </a>
        <div aria-hidden className="noise-overlay fixed inset-0 -z-10" />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
