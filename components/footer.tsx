import Link from "next/link";
import { address, businessName, email, phoneDisplay, phoneHref } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-4 pb-24 pt-20 md:px-8 md:pb-10">
      <div className="glass-panel mx-auto grid w-full max-w-6xl gap-10 rounded-2xl p-8 md:grid-cols-3 md:gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-white/50">Zamzam</p>
          <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{businessName}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500 dark:text-white/55">
            Luxury-grade masonry and chimney craftsmanship for high-value residential properties.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-700 dark:text-white/80">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-white/55">
            <li>
              <Link
                href="/"
                className="hover:text-slate-800 dark:hover:text-white/80 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-slate-800 dark:hover:text-white/80 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-slate-800 dark:hover:text-white/80 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-slate-800 dark:hover:text-white/80 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-700 dark:text-white/80">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-white/55">
            <li>
              <a
                href={phoneHref}
                className="hover:text-slate-800 dark:hover:text-white/80 transition-colors"
              >
                {phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="hover:text-slate-800 dark:hover:text-white/80 transition-colors"
              >
                {email}
              </a>
            </li>
            <li>{address}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
