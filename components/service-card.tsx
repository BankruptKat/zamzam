"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ServiceItem } from "@/data/services";

type ServiceCardData = Pick<
  ServiceItem,
  "title" | "slug" | "shortDescription" | "included" | "whyItMatters" | "ctaLabel"
>;

type ServiceCardProps = {
  service: ServiceCardData;
};

const serviceCardImages: Record<string, { src: string; alt: string }> = {
  driveways: {
    src: "/pics/service-driveway.webp",
    alt: "Residential driveway masonry work",
  },
  "concrete-work": {
    src: "/pics/service-concrete.webp",
    alt: "Concrete surface detail",
  },
  "brick-work": {
    src: "/pics/service-brick-block.webp",
    alt: "Brick and block wall craftsmanship",
  },
  "chimney-repair": {
    src: "/pics/service-chimney-repair.webp",
    alt: "Chimney repair and rebuild detail",
  },
  "masonry-restoration": {
    src: "/pics/project-featured-01.webp",
    alt: "Masonry restoration at residential exterior",
  },
  "stair-block-work": {
    src: "/pics/service-stair-block.webp",
    alt: "Exterior stair block construction",
  },
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const image = serviceCardImages[service.slug] ?? {
    src: "/pics/hero-luxury-01.webp",
    alt: service.title,
  };

  function openDrawer() {
    setIsMounted(true);
    requestAnimationFrame(() => setIsVisible(true));
  }

  function closeDrawer() {
    setIsVisible(false);
    window.setTimeout(() => setIsMounted(false), 340);
  }

  useEffect(() => {
    if (!isMounted) return;

    // Lock body scroll while drawer is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDrawer();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMounted]);

  return (
    <>
      <article className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 hover-lift">
        <div className="relative h-80 sm:h-96 md:h-96 lg:h-80">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent dark:from-[#070b12]/90 dark:via-[#070b12]/35 dark:to-transparent" />
        </div>

        <button
          type="button"
          onClick={openDrawer}
          className="absolute bottom-1.5 left-1.5 right-1.5 z-10 overflow-hidden rounded-xl border border-white/20 bg-black/30 px-2.5 py-2 text-left backdrop-blur-md before:absolute before:inset-0 before:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
          aria-label={`Open details for ${service.title}`}
        >
          <span className="relative flex items-center justify-between gap-3">
            <span>
              <span className="block text-[13px] font-semibold text-neutral-50">{service.title}</span>
              <span className="mt-0.5 line-clamp-1 block text-xs text-neutral-200/80">{service.shortDescription}</span>
            </span>
            <span className="inline-flex h-7 items-center rounded-full bg-black/35 px-3 text-[11px] font-medium text-neutral-100">
              View
            </span>
          </span>
        </button>
      </article>

      {isMounted ? (
        <div className="fixed inset-0 z-[70]">
          <button
            type="button"
            onClick={closeDrawer}
            className={`absolute inset-0 bg-slate-900/45 backdrop-blur-[2px] transition-opacity duration-300 ease-out dark:bg-black/55 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            aria-label="Close details drawer backdrop"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label={`${service.title} details`}
            className={`absolute inset-x-3 bottom-3 top-auto max-h-[74vh] overflow-y-auto rounded-3xl border border-slate-200/70 bg-white/95 p-6 text-slate-900 shadow-[0_24px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-transform duration-300 ease-out dark:border-white/15 dark:bg-[#0a1018]/95 dark:text-neutral-100 dark:shadow-[0_0_60px_rgba(0,0,0,0.45)] md:inset-x-auto md:bottom-3 md:right-3 md:top-3 md:max-h-none md:w-full md:max-w-md ${isVisible
              ? "translate-y-0 md:translate-x-0"
              : "translate-y-[110%] md:translate-y-0 md:translate-x-[110%]"
              }`}
            style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
          >
            <div className="flex h-full flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#9b4f34] dark:text-[#f4c3ad]/70">Core Service</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-neutral-50">{service.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="rounded-full border border-slate-300/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a] dark:border-white/20 dark:bg-white/10 dark:text-neutral-100 dark:shadow-none dark:hover:bg-white/15"
                >
                  Close
                </button>
              </div>

              <p className="text-sm leading-7 text-slate-600 dark:text-neutral-200/85">{service.shortDescription}</p>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-neutral-300/65">Included</p>
                <ul className="mt-3 space-y-2.5 text-sm text-slate-600 dark:text-neutral-200/85">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[0.45rem] h-px w-3 flex-shrink-0 bg-[#9b4f34]/60 dark:bg-[#f4c3ad]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-2 shrink-0 rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-neutral-300/65">Why It Matters</p>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-neutral-200/85">{service.whyItMatters}</p>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
