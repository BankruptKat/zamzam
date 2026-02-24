import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zamzam Masonry",
  description:
    "Architectural masonry and chimney restoration for discerning homeowners. Our philosophy, craftsmanship standards, and commitment to enduring quality.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
