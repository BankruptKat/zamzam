import type { ServiceItem } from "@/data/services";

type ServiceCardProps = {
  service: ServiceItem;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group glass-panel relative overflow-hidden rounded-3xl p-6 transition duration-300 hover:scale-[1.02] hover:border-white/25">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-60" />
      <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#f4c3ad]">
        <Icon aria-hidden className="h-7 w-7" />
      </div>
      <h3 className="relative text-xl font-semibold text-white">{service.title}</h3>
      <p className="relative mt-3 text-sm leading-7 text-white/70">
        {service.shortDescription}
      </p>
    </article>
  );
}
