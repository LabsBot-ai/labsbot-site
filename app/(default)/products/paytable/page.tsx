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
              <img
                src="/branding/icon.png"
                alt=""
                className="mx-auto rotate-2 rounded-2xl w-[90px] opacity-30 grayscale brightness-[0.8]"
              />
              <div className="relative -mt-8">
                <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Paytable is coming soon
                </h1>
                <p className="mx-auto max-w-2xl pb-8 text-indigo-200/65">
                  We&apos;re building a powerful tool for data, tables and
                  structured information.
                </p>
                <Link
                  href="/products"
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
