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

const iconClass = "shrink-0 w-5 h-5 text-gray-200";
const passportIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={iconClass}
    aria-hidden="true">
    <path fillRule="evenodd" d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-5-5H4zm0 2h4v2h8v2H8v8H6V4H4zm10 0v2h2v9H8v-2h6V4z" clipRule="evenodd" />
  </svg>
);
const idCardIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={iconClass}
    aria-hidden="true">
    <path fillRule="evenodd" d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0h3v12H4V4zm5 0h7v2H9V4zm0 4h7v2H9V8zm0 4h5v2H9v-2z" clipRule="evenodd" />
  </svg>
);
const fileIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={iconClass}
    aria-hidden="true">
    <path fillRule="evenodd" d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6l-5-5H4zm0 2h5v4h6v9H5V4zm7 0v2h4l-4-2z" clipRule="evenodd" />
  </svg>
);
const questionIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={iconClass}
    aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.75-9.5a.75.75 0 0 0-1.5 0v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5H11V8.25a1.25 1.25 0 0 1 2.5 0 1 1 0 0 0 2 0 3.25 3.25 0 0 0-6.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5zM10 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd" />
  </svg>
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
                  MIGREO is an intelligent digital platform designed to help
                  people moving to a new country better understand and navigate
                  administrative systems and everyday procedures.
                </p>
              </div>

              {/* Use cases */}
              <div>
                <h2 className="pb-6 font-nacelle text-2xl font-semibold text-transparent md:text-3xl animate-[gradient_12s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text">
                  How MIGREO Helps
                </h2>
                <Spotlight className="group grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className={productCardClass}>
                    <div className={cardInnerClass}>
                      <div className="p-8">
                        <div className="mb-2 flex items-center gap-3">
                          {passportIcon}
                          <h3 className="font-semibold text-gray-200">
                            Visa applications
                          </h3>
                        </div>
                        <p className="text-indigo-200/80">
                          Understand requirements, document checklists, and
                          deadlines for short-term and long-term visas. Get
                          answers about Schengen visas, national visas, and
                          transit procedures.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={productCardClass}>
                    <div className={cardInnerClass}>
                      <div className="p-8">
                        <div className="mb-2 flex items-center gap-3">
                          {idCardIcon}
                          <h3 className="font-semibold text-gray-200">
                            Residence permits
                          </h3>
                        </div>
                        <p className="text-indigo-200/80">
                          Learn about different permit types, renewal steps, and
                          conditions. The bot can explain work permits, study
                          permits, and family reunification options.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={productCardClass}>
                    <div className={cardInnerClass}>
                      <div className="p-8">
                        <div className="mb-2 flex items-center gap-3">
                          {fileIcon}
                          <h3 className="font-semibold text-gray-200">
                            Document preparation
                          </h3>
                        </div>
                        <p className="text-indigo-200/80">
                          Get help with translations, certifications,
                          apostilles, and other formalities. Know what to bring
                          to appointments and how to avoid common mistakes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={productCardClass}>
                    <div className={cardInnerClass}>
                      <div className="p-8">
                        <div className="mb-2 flex items-center gap-3">
                          {questionIcon}
                          <h3 className="font-semibold text-gray-200">
                            Procedural questions
                          </h3>
                        </div>
                        <p className="text-indigo-200/80">
                          Ask about timelines, appeal procedures, and what to
                          expect at appointments. The bot clarifies official
                          terminology and points you to the right authorities.
                        </p>
                      </div>
                    </div>
                  </div>
                </Spotlight>
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
