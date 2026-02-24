import Link from "next/link";
import { address, businessName, email, phoneDisplay, phoneHref } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-4 pb-24 pt-16 md:px-8 md:pb-10">
      <div className="glass-panel mx-auto grid w-full max-w-6xl gap-8 rounded-3xl p-8 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Zamzam</p>
          <p className="mt-3 text-2xl font-semibold text-white">{businessName}</p>
          <p className="mt-3 max-w-xs text-sm leading-7 text-white/65">
            Luxury-grade masonry and chimney craftsmanship for high-value residential properties.
          </p>
        </div>

        <div>
          <p className="text-base font-semibold text-white">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link
                href="/"
                className="luxury-link rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="luxury-link rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="luxury-link rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="luxury-link rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              Phone:{" "}
              <a
                href={phoneHref}
                className="luxury-link rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
              >
                {phoneDisplay}
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href={`mailto:${email}`}
                className="luxury-link rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
              >
                {email}
              </a>
            </li>
            <li>Address: {address}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
