import type { Metadata } from "next";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Zamzam Masonry",
  description:
    "Built on precision, committed to quality. Learn about our architectural masonry philosophy and craftsmanship standards.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
