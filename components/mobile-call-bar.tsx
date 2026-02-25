"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { phoneDisplay, phoneHref } from "@/lib/site";

export default function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      // Show after scrolling past ~85% of the viewport (i.e. past the hero fold)
      setVisible(window.scrollY > window.innerHeight * 0.85);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-all duration-500 md:hidden ${visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
        }`}
    >
      <a
        href={phoneHref}
        className="pointer-events-auto flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b25f40] to-[#d27a5a] px-5 text-sm font-medium text-white shadow-[0_12px_32px_rgba(178,95,64,0.4)] transition-transform duration-300 hover:-translate-y-0.5"
        tabIndex={visible ? 0 : -1}
      >
        <Phone aria-hidden className="h-4 w-4" />
        Request Consultation
      </a>
    </div>
  );
}
