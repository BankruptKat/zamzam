import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "@/components/cta-button";
import SectionReveal from "@/components/section-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { phoneHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Zamzam Masonry & Chimney Repairs Ltd and our commitment to reliable workmanship, quality materials, and customer satisfaction.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <SectionReveal className="glass-panel rounded-3xl p-8 md:p-10">
          <BlurFade inView duration={0.55} blur="8px">
            <Image
              src="/pics/about-team-worksite.webp"
              alt="Masonry team at a premium residential worksite"
              width={1600}
              height={1100}
              className="h-72 w-full rounded-2xl border border-white/10 object-cover md:h-96"
              priority
            />
          </BlurFade>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#f2baa0]">
            About the Company
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">About Zamzam Masonry</h1>
          <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-white/75">
            <p>
              Zamzam Masonry & Chimney Repairs Ltd delivers premium masonry and chimney services with
              a focus on longevity, structural integrity, and architectural finish quality.
            </p>
            <p>
              From custom driveways and brick restoration to full chimney removal with roof repair,
              every project is executed with precision planning and clean craftsmanship.
            </p>
            <p>
              Homeowners, property managers, and real estate investors choose us for dependable
              service, honest pricing, and durable results designed to last.
            </p>
          </div>

          <div className="mt-8">
            <CtaButton href={phoneHref} label="Call Now" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
