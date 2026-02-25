export const metadata = {
  title: "LabsBot — AI tools for real life",
  description: "LabsBot builds accessible automation platforms focused on clarity, trust and long-term scalability.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Pricing from "@/components/pricing-home";
import SplitCarousel from "@/components/split-carousel";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      {/* <SplitCarousel /> */}
      {/* <Pricing /> */}
      <Cta />
    </>
  );
}
