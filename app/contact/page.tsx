import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import SectionReveal from "@/components/section-reveal";
import { address, email, phoneDisplay, phoneHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote for masonry and chimney repairs. Contact Zamzam Masonry & Chimney Repairs Ltd by phone, email, or the website form.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-8">
        <SectionReveal>
          <h1 className="text-4xl font-semibold text-white md:text-6xl">Contact Us</h1>
          <p className="mt-4 text-base leading-8 text-white/70">
            Tell us about your project and we will get back to you quickly with a quote.
          </p>

          <div className="glass-panel mt-8 space-y-3 rounded-3xl p-6 text-sm text-white/80">
            <p>
              <span className="font-semibold text-white">Call:</span>{" "}
              <a
                href={phoneHref}
                className="luxury-link text-[#f4c3ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
              >
                {phoneDisplay}
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href={`mailto:${email}`}
                className="luxury-link text-[#f4c3ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
              >
                {email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Address:</span> {address}
            </p>
          </div>

          <div className="glass-panel mt-6 overflow-hidden rounded-3xl">
            <iframe
              title="Zamzam Masonry service area map"
              src="https://maps.google.com/maps?q=2925%20Bridge%20St%20Victoria%20BC&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </SectionReveal>

        <SectionReveal>
          <ContactForm />
        </SectionReveal>
      </div>
    </section>
  );
}
