import { Phone } from "lucide-react";
import { phoneDisplay, phoneHref } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-50 px-4 pb-[max(env(safe-area-inset-bottom),0.25rem)] md:hidden">
      <a
        href={phoneHref}
        className="pointer-events-auto glass-panel flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-[#b25f40] to-[#d27a5a] px-5 text-sm font-semibold tracking-wide text-white shadow-[0_18px_60px_rgba(178,95,64,0.45)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8cdb5]"
      >
        <Phone aria-hidden className="h-4 w-4" />
        Call {phoneDisplay}
      </a>
    </div>
  );
}
