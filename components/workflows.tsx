"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

const productCardClass =
  "group/card relative h-full overflow-hidden rounded-2xl p-px bg-[radial-gradient(ellipse_95%_80%_at_0%_0%,rgba(255,255,255,0.03),transparent_62%),radial-gradient(ellipse_95%_80%_at_100%_0%,rgba(255,255,255,0.022),transparent_62%),radial-gradient(ellipse_95%_80%_at_100%_100%,rgba(167,139,250,0.038),transparent_64%),radial-gradient(ellipse_95%_80%_at_0%_100%,rgba(255,255,255,0.02),transparent_62%)] after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-0 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 group-hover:after:opacity-100";
const productCardClassNoSpotlight =
  "group/card relative h-full overflow-hidden rounded-2xl p-px";
const cardInnerClass =
  "relative z-10 h-full overflow-hidden rounded-[inherit]";
const arrowIcon = (
  <div
    className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
    aria-hidden="true"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
      <path
        fill="#F4F4F5"
        d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
      />
    </svg>
  </div>
);

export default function Workflows() {
  const [moreProductsOpen, setMoreProductsOpen] = useState(false);

  return (
    <section id="products">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex text-base md:text-2xl bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Products
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              The LabsBot Ecosystem
            </h2>
          </div>
          {/* Spotlight items - 4 product cards (LingvoBot & SchoolBot collapsible) */}
          <Spotlight
            className={`group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none grid-cols-1 ${moreProductsOpen ? "sm:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-2"}`}
          >
            {/* Migreo (Live) - spotlight; logo container has no background so no black panel */}
            <div className={productCardClass}>
              <div className={cardInnerClass}>
                <div
                  className="pointer-events-none absolute inset-0 z-[1] overflow-hidden rounded-[inherit]"
                  aria-hidden
                >
                  <div
                    className="pointer-events-none absolute bottom-[-6%] right-[-10%] h-[132%] w-[min(168%,46rem)] max-w-none origin-bottom-right -rotate-[16deg] bg-no-repeat opacity-[0.045] mix-blend-soft-light select-none"
                    style={{
                      backgroundImage: "url('/branding/migreo-symbol.svg')",
                      backgroundSize: "90%",
                      backgroundPosition: "40% 140%",
                    }}
                    aria-hidden
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 z-[2] overflow-hidden rounded-[inherit] [background:radial-gradient(ellipse_75%_60%_at_0%_0%,rgba(99,102,241,0.09),transparent_62%),radial-gradient(ellipse_75%_60%_at_100%_0%,rgba(139,92,246,0.065),transparent_62%),radial-gradient(ellipse_75%_60%_at_100%_100%,rgba(99,102,241,0.075),transparent_64%),radial-gradient(ellipse_75%_60%_at_0%_100%,rgba(129,140,248,0.06),transparent_62%)]"
                  aria-hidden
                />
                <a
                  href="https://t.me/MigrantEuroBot?start=site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-6 top-6 z-10 pointer-events-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-100"
                  style={{ zIndex: 50 }}
                  aria-label="Open Migreo on Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </a>
                <div className="relative z-20 flex items-center justify-center h-40 mb-6 overflow-hidden">
                  <img
                    src="/branding/migreo.svg"
                    alt="Migreo logo"
                    className="max-h-24 w-auto object-contain"
                    style={{
                      filter: "none",
                      opacity: 1,
                    }}
                  />
                </div>
                <div className="relative z-10 p-6">
                  <div className="mb-3">
                    <span className="inline-flex items-center relative rounded-full bg-gray-800/40 px-4 py-1.5 text-base font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Live
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                    MIGREO
                  </h3>
                  <p className="mb-4 text-indigo-200/65">
                    AI tools to solve immigration problems
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="btn-sm group inline-flex bg-linear-to-t from-indigo-500 via-violet-500 to-purple-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,.16)] hover:bg-[length:100%_150%] transition-all"
                      href="https://t.me/MigrantEuroBot?start=site"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Telegram
                    </a>
                    <Link
                      className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium border border-white/20 text-white/90 bg-transparent hover:bg-white/10 transition"
                      href="/products/migreo"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Paytable (Coming soon) */}
            <div className={productCardClass}>
              <div className={cardInnerClass}>
                <a
                  href="/products"
                  className="absolute right-6 top-6 z-10 pointer-events-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-100"
                  style={{ zIndex: 50 }}
                  aria-label="Open Paytable"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </a>
                <div className="relative z-20 flex items-center justify-center h-40 mb-6 overflow-hidden">
                  <Image
                    className="max-h-24 w-auto object-contain"
                    src={WorflowImg02}
                    width={350}
                    height={288}
                    alt="Paytable"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-flex items-center relative rounded-full bg-gray-800/40 px-4 py-1.5 text-base font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Coming soon
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                    Paytable
                  </h3>
                  <p className="mb-4 text-indigo-200/65">
                    AI-powered table and payment assistant.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      className="btn-sm group inline-flex bg-linear-to-t from-indigo-500 via-violet-500 to-purple-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,.16)] hover:bg-[length:100%_150%] transition-all"
                      href="/products"
                    >
                      Open in browser
                    </Link>
                    <Link
                      className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium border border-white/20 text-white/90 bg-transparent hover:bg-white/10 transition"
                      href="/products"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* LingvoBot (Coming soon) */}
            <Link
              href="/products"
              className={`${productCardClass} ${moreProductsOpen ? "" : "hidden"}`}
            >
              <div className={cardInnerClass}>
                {arrowIcon}
                <Image
                  className="inline-flex"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="LingvoBot"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-flex items-center relative rounded-full bg-gray-800/40 px-4 py-1.5 text-base font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Coming soon
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                    LingvoBot
                  </h3>
                  <p className="text-indigo-200/65">
                    Language explanations made simple.
                  </p>
                </div>
              </div>
            </Link>
            {/* SchoolBot (Coming soon) */}
            <Link
              href="/products"
              className={`${productCardClass} ${moreProductsOpen ? "" : "hidden"}`}
            >
              <div className={cardInnerClass}>
                {arrowIcon}
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="SchoolBot"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-flex items-center relative rounded-full bg-gray-800/40 px-4 py-1.5 text-base font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Coming soon
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                    SchoolBot
                  </h3>
                  <p className="text-indigo-200/65">
                    AI assistant for structured learning.
                  </p>
                </div>
              </div>
            </Link>
          </Spotlight>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setMoreProductsOpen((o) => !o)}
              className="group btn-sm cursor-pointer inline-flex items-center gap-2 rounded-lg border border-white/10 bg-transparent text-white/80 transition-all hover:bg-white/5 hover:text-white"
              aria-expanded={moreProductsOpen}
            >
              <span className="relative">
                {moreProductsOpen ? "Show fewer products" : "Show more products"}
              </span>
              <svg
                className={`relative h-4 w-4 shrink-0 text-white/80 transition-all duration-200 ease-out group-hover:text-white ${moreProductsOpen ? "rotate-180 group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
