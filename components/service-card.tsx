import Link from "next/link";
import type { ServiceItem } from "@/data/services";

type ServiceCardProps = {
  service: ServiceItem;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group glass-panel relative block overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover-lift"
    >
      {/* Subtle icon - reduced prominence */}
      <div className="relative mb-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/3 text-[#f4c3ad]/70 transition-all duration-300 group-hover:border-white/12 group-hover:text-[#f4c3ad]">
        <Icon aria-hidden className="h-4 w-4 opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      </div>
      <h3 className="relative text-lg font-semibold text-white transition-colors duration-300 group-hover:text-white/90">
        {service.title}
      </h3>
      <p className="relative mt-2 text-sm leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/65">
        {service.shortDescription}
      </p>
    </Link>
  );
}
