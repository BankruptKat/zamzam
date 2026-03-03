"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { phoneHref } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const overlayRoutes = ["/", "/about"];
  const isOverlay = overlayRoutes.includes(pathname);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-3 md:px-8">
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 md:px-6 ${isOverlay
            ? "border border-white/15 bg-black/40 shadow-[0_12px_34px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border border-white/20 bg-black/50 shadow-[0_12px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          }`}
      >
        <Link href="/" className="text-sm font-semibold tracking-[0.03em] text-neutral-100 md:text-base">
          Zamzam Masonry
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm font-medium text-neutral-200/80 transition-colors hover:text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <AnimatedThemeToggler />
          <a
            href={phoneHref}
            className="hidden min-h-10 items-center rounded-full bg-gradient-to-r from-[#b25f40] to-[#d27a5a] px-5 text-sm font-semibold text-neutral-50 shadow-[0_8px_24px_rgba(178,95,64,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(178,95,64,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8cdb5] xl:inline-flex"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 p-2 text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a] lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-nav" className="mx-auto mt-3 w-full max-w-6xl lg:hidden">
          <nav
            className={`flex flex-col rounded-3xl px-4 py-4 ${isOverlay
                ? "border border-white/20 bg-black/45 backdrop-blur-xl"
                : "border border-white/20 bg-black/40 backdrop-blur-xl"
              }`}
            aria-label="Mobile Navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center min-h-[48px] rounded-xl px-4 py-3 text-[16px] font-medium text-neutral-100/90 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={phoneHref}
              className="mt-3 flex items-center justify-center min-h-[48px] rounded-full bg-gradient-to-r from-[#b25f40] to-[#d27a5a] px-4 py-3 text-center text-[16px] font-semibold text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8cdb5]"
            >
              Request Consultation
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
