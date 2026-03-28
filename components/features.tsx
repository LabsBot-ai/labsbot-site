import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

const iconWrapperClass =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5";
const iconClass = "h-6 w-6 text-gray-100";
const iconHeadingRowClass = "mb-2 flex items-start gap-2";
const strokeProps = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex text-base md:text-2xl bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Why LabsBot
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              We were the first to bring AI into everyday life
            </h2>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-4">
            <article>
              <div className={iconHeadingRowClass}>
                <div className={iconWrapperClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={iconClass}
                    aria-hidden="true"
                    {...strokeProps}
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">
                  Language is not a barrier
                </h3>
              </div>
              <p className="text-indigo-200/65">
                Our products operate across multiple languages, ensuring clear interaction in any environment.
              </p>
            </article>
            <article>
              <div className={iconHeadingRowClass}>
                <div className={iconWrapperClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={iconClass}
                    aria-hidden="true"
                    {...strokeProps}
                  >
                    <path d="m12 3 1.8 3.7L18 8.5l-3 2.9.7 4.1L12 13.6l-3.7 1.9.7-4.1-3-2.9 4.2-.8L12 3Z" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">
                  Limitless possibilities
                </h3>
              </div>
              <p className="text-indigo-200/65">
                We use AI in our projects to handle everyday tasks and complex processes across immigration, education and business.
              </p>
            </article>
            <article>
              <div className={iconHeadingRowClass}>
                <div className={iconWrapperClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={iconClass}
                    aria-hidden="true"
                    {...strokeProps}
                  >
                    <path d="M12 3 5 6v6c0 5 3.4 8.4 7 9 3.6-.6 7-4 7-9V6l-7-3Z" />
                    <path d="M9 12.5 11 14.5l4-4" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">
                  Privacy comes first
                </h3>
              </div>
              <p className="text-indigo-200/65">
                We follow strict EU data protection standards, ensuring secure, transparent and minimal processing.
              </p>
            </article>
            <article>
              <div className={iconHeadingRowClass}>
                <div className={iconWrapperClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={iconClass}
                    aria-hidden="true"
                    {...strokeProps}
                  >
                    <path d="M4 6h16M4 18h16M7 6v12M17 6v12" />
                    <circle cx="7" cy="10" r="1.6" />
                    <circle cx="17" cy="14" r="1.6" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">
                  Simple to use
                </h3>
              </div>
              <p className="text-indigo-200/65">
                Intuitive interfaces with minimal setup, so you can start solving your tasks right away.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
