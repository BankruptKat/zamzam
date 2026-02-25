import { Phone } from "lucide-react";
import { phoneDisplay, phoneHref } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden">
      <a
        href={phoneHref}
        className="pointer-events-auto flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b25f40] to-[#d27a5a] px-5 text-sm font-medium text-white shadow-[0_12px_32px_rgba(178,95,64,0.4)] transition-transform duration-300 hover:-translate-y-0.5"
      >
        <Phone aria-hidden className="h-4 w-4" />
        Request Consultation
      </a>
    </div>
  );
}
