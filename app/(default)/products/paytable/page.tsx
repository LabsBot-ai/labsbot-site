export const metadata = {
  title: "Paytable - LabsBot",
  description:
    "Paytable — a powerful tool for data, tables and structured information.",
};

import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import FooterSeparator from "@/components/footer-separator";

export default function PaytablePage() {
  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="text-center">
              <div className="relative mx-auto mb-12 inline-block max-w-full">
                <img
                  src="/branding/icon.png"
                  alt=""
                  className="z-0 mx-auto block max-w-full w-[400px] rounded-2xl opacity-[0.1] grayscale brightness-[0.75] contrast-90 blur-[0.5px] md:w-[480px]"
                />
                <h1 className="absolute inset-0 z-10 flex items-center justify-center px-4 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Paytable is coming soon
                </h1>
              </div>
              <div className="relative mt-12">
                <p className="mx-auto max-w-2xl pb-8 text-indigo-200/65">
                  We&apos;re building a powerful tool for data, tables and
                  structured information.
                </p>
                <Link
                  href="/#products"
                  className="flex items-center justify-center gap-2 text-sm text-gray-400 transition transition-transform duration-200 hover:-translate-x-1 hover:text-gray-200"
                >
                  <span>←</span>
                  <span>Back to products</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
