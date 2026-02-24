import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("grid auto-rows-[19rem] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
}

type BentoCardProps = {
  Icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  cta: string;
  className?: string;
  background?: ReactNode;
};

export function BentoCard({
  Icon,
  name,
  description,
  href,
  cta,
  className,
  background,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/12 bg-white/6 p-6 shadow-[0_10px_36px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/14 via-white/5 to-transparent opacity-65" />
      {background ? (
        <div className="pointer-events-none absolute inset-0 opacity-85 transition duration-300 ease-out group-hover:opacity-100">
          {background}
        </div>
      ) : null}
      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="w-fit rounded-xl border border-white/14 bg-black/25 p-2 text-[#f4c3ad]">
          <Icon aria-hidden className="h-4 w-4" />
        </div>
        <h3 className="mt-3 text-xl font-semibold text-white">{name}</h3>
        <p className="mt-2 max-w-[44ch] text-sm leading-6 text-white/72">{description}</p>
        <Link
          href={href}
          className="mt-4 w-fit text-sm font-semibold text-[#f4c3ad] transition-colors duration-300 ease-out hover:text-[#ffd3bf]"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
