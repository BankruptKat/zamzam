import type { Metadata } from "next";

export const businessName = "Zamzam Masonry & Chimney Repairs Ltd";
export const phoneDisplay = "250 514 6460";
export const phoneHref = "tel:+12505146460";
export const email = "zamzamchimeny@gmail.com";
export const address = "1-2925 Bridge St";
export const serviceArea = "Victoria & Vancouver Island";
export const siteUrl = "https://www.zamzammasonry.ca";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${businessName} | Masonry & Chimney Repairs`,
    template: `%s | ${businessName}`,
  },
  description:
    "Reliable masonry and chimney repairs in Victoria and Vancouver Island. Driveways, concrete, brick work, chimney cap rebuilds, removals, and roof repair.",
  keywords: [
    "masonry contractor near me",
    "chimney repair",
    "chimney cap repair",
    "chimney removal",
    "concrete driveway contractor",
    "brick repair",
    "stair block installation",
    "Victoria masonry contractor",
    "Vancouver Island chimney repair",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${businessName} | Masonry & Chimney Repairs`,
    description:
      "Trusted masonry and chimney specialist for driveways, concrete work, brick restoration, and chimney services.",
    url: siteUrl,
    siteName: businessName,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/pics/og-cover.webp",
        width: 1200,
        height: 630,
        alt: `${businessName} luxury masonry showcase`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessName} | Masonry & Chimney Repairs`,
    description:
      "Professional masonry and chimney repairs with honest pricing and durable workmanship.",
    images: ["/pics/og-cover.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    image: `${siteUrl}/pics/hero-luxury-01.webp`,
    url: siteUrl,
    telephone: phoneDisplay,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: "Victoria",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    areaServed: serviceArea,
    description:
      "Professional masonry and chimney services including driveways, concrete work, brick work, chimney repair, cap rebuilds, and chimney removal with roof repair.",
    openingHours: "Mo-Sa 08:00-18:00",
    priceRange: "$$",
  };
}
