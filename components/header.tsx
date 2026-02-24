"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { phoneDisplay, phoneHref } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-8">
      <div className="glass-panel mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border-white/15 px-4 py-3 md:px-6">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.14em] text-white md:text-base">
          Zamzam Masonry
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="luxury-link rounded-sm text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={phoneHref}
          className="hidden min-h-11 items-center rounded-full border border-white/20 bg-gradient-to-r from-[#b25f40] to-[#d27a5a] px-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(178,95,64,0.38)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(178,95,64,0.44)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8cdb5] lg:inline-flex"
        >
          Call {phoneDisplay}
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center rounded-full border border-white/20 bg-white/10 p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-nav" className="mx-auto mt-3 w-full max-w-6xl md:hidden">
          <nav
            className="glass-panel flex flex-col rounded-2xl border-white/15 px-4 py-4"
            aria-label="Mobile Navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={phoneHref}
              className="mt-3 rounded-full bg-gradient-to-r from-[#b25f40] to-[#d27a5a] px-3 py-3 text-center text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8cdb5]"
            >
              Call {phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
