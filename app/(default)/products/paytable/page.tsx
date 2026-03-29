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
                  className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                  href="/#products"
                >
                  Back to products
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
