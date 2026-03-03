import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import SectionReveal from "@/components/section-reveal";
import { address, email, phoneDisplay, phoneHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Zamzam Masonry",
  description:
    "Begin your masonry project with a consultation. Contact our team for architectural masonry and chimney restoration services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="px-4 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <SectionReveal className="mb-12 text-center md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#b96849] dark:text-[#f4c3ad]/70">Begin Your Project</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white md:text-6xl">Start a Conversation</h1>
          <p className="mx-auto mt-4 max-w-lg text-[17px] leading-[1.65] text-slate-500 dark:text-white/55 md:text-lg">
            Limited project availability. Schedule your consultation to discuss your requirements.
          </p>
        </SectionReveal>

        <div className="grid gap-8 md:grid-cols-2 md:items-stretch md:gap-12">
          <SectionReveal className="h-full">
            <div className="flex h-full flex-col">
              <div className="glass-panel rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Contact Information</h2>
                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 dark:text-white/40">Phone</span>
                    <a
                      href={phoneHref}
                      className="luxury-link text-[#9b4f34] dark:text-[#f4c3ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
                    >
                      {phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 dark:text-white/40">Email</span>
                    <a
                      href={`mailto:${email}`}
                      className="luxury-link text-[#9b4f34] dark:text-[#f4c3ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
                    >
                      {email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 dark:text-white/40">Address</span>
                    <span className="text-slate-700 dark:text-white/70">{address}</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel mt-6 overflow-hidden rounded-2xl md:min-h-[360px] md:flex-1">
                <iframe
                  title="Zamzam Masonry service area map"
                  src="https://maps.google.com/maps?q=2925%20Bridge%20St%20Victoria%20BC&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[360px] border-0 md:h-full"
                />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="h-full">
            <ContactForm className="h-full" />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
