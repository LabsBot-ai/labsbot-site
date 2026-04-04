/** Right-edge only: crisp left/center, smooth horizontal fade where the SVG is clipped. */
const whereGoingMapMask =
  "linear-gradient(to right, #000 0%, #000 48%, rgba(0,0,0,0.97) 58%, rgba(0,0,0,0.78) 70%, rgba(0,0,0,0.42) 82%, rgba(0,0,0,0.14) 92%, transparent 100%)";

export default function HeroAbout() {
  return (
    <>
      {/* Section 1 — Who we are */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="pb-12 text-center md:pb-20">
              <div className="mx-auto max-w-3xl">
                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Who we are
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-indigo-200/65">
                  <p>
                    We are a small team building applied AI tools focused on
                    real-world use.
                  </p>
                  <p>
                    LabsBot started as an internal project while working with
                    different AI solutions. We quickly realized that most tools
                    were either too complex or not designed for practical use.
                  </p>
                  <p>
                    So we began building our own — simple, focused tools that can
                    be used immediately without unnecessary setup or friction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Why */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-0">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                Why we&apos;re building this
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-indigo-200/65">
                <p>
                  Most AI tools today are either too complex or not practical for
                  real-world use.
                </p>
                <p>
                  We saw this firsthand while working with different systems —
                  tools looked powerful, but required too much setup, context, or
                  technical knowledge.
                </p>
                <p>
                  We focus on solving real problems directly — without
                  unnecessary layers, abstractions, or friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Where we're going */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
            {/* EU map — faint hint, slightly wider than text; tinted + masked */}
            <div
              className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
              aria-hidden
            >
              <img
                src="/branding/maps-eu.svg"
                alt=""
                width={1462}
                height={1443}
                decoding="async"
                className="absolute left-1/2 top-[52%] z-0 w-[45%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain object-center opacity-[0.13] [filter:brightness(0)_saturate(100%)_invert(34%)_sepia(100%)_saturate(1500%)_hue-rotate(222deg)_brightness(1.1)_contrast(0.92)]"
                style={{
                  maskImage: whereGoingMapMask,
                  WebkitMaskImage: whereGoingMapMask,
                }}
              />
              {/* Star shapes only (SVG as mask) — no full-viewport img rectangle */}
              <div
                className="pointer-events-none absolute left-1/2 top-[52%] z-[1] w-[45%] max-w-none -translate-x-1/2 -translate-y-1/2 [aspect-ratio:1462/1443]"
                style={{
                  maskImage: whereGoingMapMask,
                  WebkitMaskImage: whereGoingMapMask,
                }}
                aria-hidden
              >
                <div
                  className="absolute inset-0 [filter:drop-shadow(0_0_6px_rgba(214,219,255,0.38))_drop-shadow(0_0_18px_rgba(99,102,241,0.16))]"
                  style={{
                    WebkitMaskImage: "url(/branding/icon-star-ue.svg)",
                    maskImage: "url(/branding/icon-star-ue.svg)",
                    WebkitMaskSize: "88% 88%",
                    maskSize: "88% 88%",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskMode: "luminance",
                    maskMode: "luminance",
                    background:
                      "radial-gradient(ellipse 75% 75% at 50% 50%, rgb(244 245 255) 0%, rgb(214 219 255 / 0.88) 45%, rgb(165 180 252 / 0.35) 72%, transparent 100%)",
                    opacity: 0.44,
                  }}
                />
              </div>
            </div>
            <svg
              className="pointer-events-none absolute inset-0 -z-0 h-full min-h-[14rem] w-full select-none"
              viewBox="0 0 800 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <defs>
                <radialGradient
                  id="about-where-glow-core"
                  cx="50%"
                  cy="48%"
                  r="65%"
                  fx="48%"
                  fy="46%"
                >
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.38" />
                  <stop offset="40%" stopColor="#7c6fd4" stopOpacity="0.14" />
                  <stop offset="75%" stopColor="#4f46e5" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#312e81" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="about-where-glow-violet"
                  cx="55%"
                  cy="52%"
                  r="55%"
                >
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.28" />
                  <stop offset="50%" stopColor="#6d28d9" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="about-where-glow-cool"
                  cx="45%"
                  cy="55%"
                  r="50%"
                >
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.22" />
                  <stop offset="60%" stopColor="#6366f1" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#3730a3" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="about-where-vignette"
                  cx="50%"
                  cy="50%"
                  r="72%"
                >
                  <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                  <stop offset="55%" stopColor="#fff" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <filter
                  id="about-where-blur-deep"
                  x="-45%"
                  y="-45%"
                  width="190%"
                  height="190%"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur in="SourceGraphic" stdDeviation="48" />
                </filter>
                <filter
                  id="about-where-blur-mid"
                  x="-35%"
                  y="-35%"
                  width="170%"
                  height="170%"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur in="SourceGraphic" stdDeviation="32" />
                </filter>
                <mask
                  id="about-where-soft-edge"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="800"
                  height="320"
                >
                  <rect width="800" height="320" fill="url(#about-where-vignette)" />
                </mask>
              </defs>
              {/* Soft atmospheric glow — fills only, no strokes / paths */}
              <g mask="url(#about-where-soft-edge)" opacity={0.92}>
                <ellipse
                  cx={400}
                  cy={152}
                  rx={340}
                  ry={165}
                  fill="url(#about-where-glow-core)"
                  filter="url(#about-where-blur-deep)"
                  opacity={0.85}
                />
                <ellipse
                  cx={380}
                  cy={168}
                  rx={260}
                  ry={200}
                  fill="url(#about-where-glow-violet)"
                  filter="url(#about-where-blur-mid)"
                  opacity={0.75}
                />
                <ellipse
                  cx={430}
                  cy={145}
                  rx={220}
                  ry={150}
                  fill="url(#about-where-glow-cool)"
                  filter="url(#about-where-blur-mid)"
                  opacity={0.7}
                />
              </g>
            </svg>
            <div className="relative z-10 mx-auto max-w-3xl text-center md:pb-0">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                Where we&apos;re going
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-indigo-200/65">
                <p>
                  We are building tools that can scale beyond individual users —
                  into systems that support real processes and communities.
                </p>
                <p>
                  One of the key directions is migration — helping people
                  navigate complex systems across different countries.
                </p>
                <p>
                  Over time, we aim to move beyond individual tools and build
                  solutions that can operate at the level of regions,
                  institutions, and public systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
