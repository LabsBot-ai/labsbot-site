export const metadata = {
  title: "About - LabsBot",
  description:
    "LabsBot builds practical AI tools for real-life use — simple, fast, and focused on real problems.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-about";
import Cta from "@/components/cta";

export default function About() {
  return (
    <>
      <PageIllustration multiple />
      <Hero />
      <Cta />
    </>
  );
}
