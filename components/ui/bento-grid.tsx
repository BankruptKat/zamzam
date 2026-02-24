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
    <div className={cn("grid auto-rows-[20rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
}

type BentoCardProps = {
  Icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  className?: string;
  background?: ReactNode;
};

export function BentoCard({
  Icon,
  name,
  description,
  href,
  className,
  background,
}: BentoCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-white/8 bg-white/4 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover-lift",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/6 to-transparent opacity-50" />
      {background ? (
        <div className="pointer-events-none absolute inset-0 opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-85">
          {background}
        </div>
      ) : null}
      <div className="relative z-10 flex h-full flex-col justify-end">
        {/* Reduced icon prominence */}
        <div className="w-fit rounded-lg border border-white/8 bg-black/15 p-2 text-[#f4c3ad]/60 transition-all duration-300 group-hover:border-white/12 group-hover:text-[#f4c3ad]/80">
          <Icon aria-hidden className="h-4 w-4 opacity-50 transition-opacity duration-300 group-hover:opacity-70" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white transition-colors duration-300">{name}</h3>
        {/* Shortened description - one sentence max */}
        <p className="mt-2 max-w-[40ch] text-sm leading-6 text-white/50 transition-colors duration-300 group-hover:text-white/60">{description}</p>
      </div>
    </Link>
  );
}
