export const metadata = {
  title: "MIGREO - LabsBot",
  description:
    "AI assistant for migration and bureaucracy. Get help with visas, residence permits, and official procedures.",
};

import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import Spotlight from "@/components/spotlight";

const productCardClass =
  "group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-0 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-0 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100";
const cardInnerClass =
  "relative z-10 h-full overflow-hidden rounded-[inherit]";

const iconWrapperClass =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5";
const iconClass =
  "h-6 w-6 text-gray-100";
const strokeProps = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};
const immigrationIcon = (
  <div className={iconWrapperClass}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={iconClass}
      aria-hidden="true"
      {...strokeProps}
    >
      <path d="M8 3v18M8 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
    </svg>
  </div>
);
const housingIcon = (
  <div className={iconWrapperClass}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={iconClass}
      aria-hidden="true"
      {...strokeProps}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
      <path d="M9 22V12h6v10" />
    </svg>
  </div>
);
const workIcon = (
  <div className={iconWrapperClass}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={iconClass}
      aria-hidden="true"
      {...strokeProps}
    >
      <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M8 12h8" />
    </svg>
  </div>
);
const documentIcon = (
  <div className={iconWrapperClass}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={iconClass}
      aria-hidden="true"
      {...strokeProps}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  </div>
);

export default function MigreoProductPage() {
  return (
    <>
      <PageIllustration />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Hero */}
            <div className="pb-16 md:pb-24">
              <div className="flex flex-col items-center text-center">
                <Link
                  href="/#products"
                  className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-400 transition transition-transform duration-200 hover:-translate-x-1 hover:text-gray-200"
                >
                  <span>←</span>
                  <span>Back to products</span>
                </Link>
                <div className="relative z-20 mb-8 flex h-20 items-center justify-center">
                  <img
                    src="/branding/migreo.svg"
                    alt="Migreo logo"
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <p className="max-w-2xl animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  New Country. New Home.
                </p>
              </div>
            </div>

            {/* What the bot does */}
            <div className="mx-auto max-w-3xl space-y-16 pb-16 md:pb-24">
              <div>
                <h2 className="pb-6 font-nacelle text-2xl font-semibold text-transparent md:text-3xl animate-[gradient_12s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text">
                  Inside MIGREO
                </h2>
                <p className="text-lg leading-relaxed text-indigo-200/80">
                  MIGREO is a technology product designed to solve migration and
                  everyday challenges.
                </p>
              </div>

              {/* Use cases */}
              <div>
                <h2 className="pb-6 font-nacelle text-2xl font-semibold text-transparent md:text-3xl animate-[gradient_12s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text">
                  MIGREO Capabilities
                </h2>
                <div className="relative">
                  <img
                    src="/branding/migreo-symbol.svg"
                    alt=""
                    className="pointer-events-none absolute left-1/2 top-1/2 w-[420px] md:w-[560px] lg:w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-5 blur-[2px]"
                  />
                  <Spotlight className="group grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className={productCardClass}>
                    <div className={cardInnerClass}>
                      <div className="p-8">
                        <div className="mb-2 flex items-start gap-2">
                          {immigrationIcon}
                          <h3 className="font-semibold text-gray-200">
                            Immigration
                          </h3>
                        </div>
                        <p className="text-indigo-200/80">
                          Using the capabilities of artificial intelligence, we
                          help people understand migration processes and make
                          decisions faster and with greater confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={productCardClass}>
                    <div className={cardInnerClass}>
                      <div className="p-8">
                        <div className="mb-2 flex items-start gap-2">
                          {housingIcon}
                          <h3 className="font-semibold text-gray-200">
                            Housing
                          </h3>
                        </div>
                        <p className="text-indigo-200/80">
                          An intelligent system built into our platform helps
                          people find housing, understand rental agreements,
                          and resolve housing issues.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={productCardClass}>
                    <div className={cardInnerClass}>
                      <div className="p-8">
                        <div className="mb-2 flex items-start gap-2">
                          {workIcon}
                          <h3 className="font-semibold text-gray-200">
                            Work
                          </h3>
                        </div>
                        <p className="text-indigo-200/80">
                          Digital tools we developed support CV preparation,
                          understanding employment contracts, and starting a
                          career in a new country.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={productCardClass}>
                    <div className={cardInnerClass}>
                      <div className="p-8">
                        <div className="mb-2 flex items-start gap-2">
                          {documentIcon}
                          <h3 className="font-semibold text-gray-200">
                            Documents
                          </h3>
                        </div>
                        <p className="text-indigo-200/80">
                          We integrate advanced AI capabilities for document
                          translation, letter drafting, and preparing requests
                          for organizations and institutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </Spotlight>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mx-auto max-w-3xl rounded-2xl border border-gray-700/50 bg-gray-800/30 px-8 py-12 text-center">
              <h2 className="pb-4 font-nacelle text-2xl font-semibold text-gray-200">
                Try MIGREO now
              </h2>
              <p className="mb-6 text-indigo-200/80">
                Start a conversation in Telegram and get answers to your
                migration questions.
              </p>
              <div className="flex justify-center">
                <a
                  className="btn-sm group inline-flex bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,.16)] transition hover:opacity-95"
                  href="https://t.me/MigrantEuroBot?start=site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Telegram
                </a>
              </div>
              <div className="mt-4 text-center">
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
    </>
  );
}
