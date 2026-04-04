import type { CSSProperties } from "react";

/** Right-edge: smooth dissolve — no hard corner; full fade into background. */
const whereGoingMaskHorizontal =
  "linear-gradient(to right, #000 0%, #000 38%, rgba(0,0,0,0.94) 46%, rgba(0,0,0,0.72) 56%, rgba(0,0,0,0.42) 68%, rgba(0,0,0,0.18) 80%, rgba(0,0,0,0.05) 90%, transparent 100%)";

/** Map + stars: horizontal fade only (full composition visible; section handoff uses CTA bridge). */
const whereGoingEuLayerMask: CSSProperties = {
  maskImage: whereGoingMaskHorizontal,
  WebkitMaskImage: whereGoingMaskHorizontal,
};

/** Mobile-only: same horizontal edge fade as shared mask — stronger outer suppression than the previous softened variant. */
const whereGoingStarsOuterMaskMobile = whereGoingMaskHorizontal;

/** Map silhouette + horizontal fade — for tonal overlay clipped to landmass only. */
const whereGoingMapTonalOverlayMask: CSSProperties = {
  maskImage: `${whereGoingMaskHorizontal}, url(/branding/maps-eu.svg)`,
  WebkitMaskImage: `${whereGoingMaskHorizontal}, url(/branding/maps-eu.svg)`,
  maskSize: "100% 100%, contain",
  WebkitMaskSize: "100% 100%, contain",
  maskPosition: "center, center",
  WebkitMaskPosition: "center, center",
  maskRepeat: "no-repeat, no-repeat",
  WebkitMaskRepeat: "no-repeat, no-repeat",
  maskComposite: "intersect",
};

/** Map L→R + stars R→L: mobile uses softer stops than desktop; desktop block must stay in sync logically, not numerically. */
const heroAboutWhereGoingMaskStyles = `
@media (max-width: 767.98px) {
  .hero-about-wg-map {
    -webkit-mask-image: ${whereGoingMaskHorizontal}, linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 30%, rgba(255,255,255,0.92) 54%, rgba(255,255,255,0.72) 78%, rgba(255,255,255,0.52) 100%);
    mask-image: ${whereGoingMaskHorizontal}, linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 30%, rgba(255,255,255,0.92) 54%, rgba(255,255,255,0.72) 78%, rgba(255,255,255,0.52) 100%);
    -webkit-mask-size: 100% 100%, 100% 100%;
    mask-size: 100% 100%, 100% 100%;
    -webkit-mask-position: center, center;
    mask-position: center, center;
    -webkit-mask-repeat: no-repeat, no-repeat;
    mask-repeat: no-repeat, no-repeat;
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
  }
  .hero-about-wg-stars-img {
    -webkit-mask-image: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 10%, rgba(255,255,255,0.12) 24%, rgba(255,255,255,0.38) 42%, rgba(255,255,255,0.72) 58%, rgba(255,255,255,0.95) 74%, rgba(255,255,255,1) 82%, rgba(255,255,255,1) 100%);
    mask-image: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 10%, rgba(255,255,255,0.12) 24%, rgba(255,255,255,0.38) 42%, rgba(255,255,255,0.72) 58%, rgba(255,255,255,0.95) 74%, rgba(255,255,255,1) 82%, rgba(255,255,255,1) 100%);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-mode: luminance;
    mask-mode: luminance;
  }
  .hero-about-wg-stars-clip {
    -webkit-mask-image: ${whereGoingStarsOuterMaskMobile} !important;
    mask-image: ${whereGoingStarsOuterMaskMobile} !important;
    -webkit-mask-size: 100% 100% !important;
    mask-size: 100% 100% !important;
    -webkit-mask-repeat: no-repeat !important;
    mask-repeat: no-repeat !important;
  }
}
@media (min-width: 768px) {
  .hero-about-wg-map {
    -webkit-mask-image: ${whereGoingMaskHorizontal}, linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.78) 24%, rgba(255,255,255,0.36) 56%, rgba(255,255,255,0.09) 86%, rgba(255,255,255,0.02) 100%);
    mask-image: ${whereGoingMaskHorizontal}, linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.78) 24%, rgba(255,255,255,0.36) 56%, rgba(255,255,255,0.09) 86%, rgba(255,255,255,0.02) 100%);
    -webkit-mask-size: 100% 100%, 100% 100%;
    mask-size: 100% 100%, 100% 100%;
    -webkit-mask-position: center, center;
    mask-position: center, center;
    -webkit-mask-repeat: no-repeat, no-repeat;
    mask-repeat: no-repeat, no-repeat;
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
  }
  .hero-about-wg-stars-img {
    -webkit-mask-image: linear-gradient(to right, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.26) 34%, rgba(255,255,255,0.74) 70%, rgba(255,255,255,1) 100%);
    mask-image: linear-gradient(to right, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.26) 34%, rgba(255,255,255,0.74) 70%, rgba(255,255,255,1) 100%);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-mode: luminance;
    mask-mode: luminance;
  }
}
`;

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
          <div className="py-12 md:py-20">
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
          <div className="relative overflow-hidden py-12 md:py-20">
            <style
              dangerouslySetInnerHTML={{ __html: heroAboutWhereGoingMaskStyles }}
            />
            {/* EU map — faint hint, slightly wider than text; tinted + masked */}
            <div
              className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
              aria-hidden
            >
              <img
                src="/branding/maps-eu.svg"
                alt=""
                width={1462}
                height={1443}
                decoding="async"
                className="hero-about-wg-map absolute left-1/2 top-[47%] z-0 w-[82%] max-w-none translate-x-[calc(-50%_-_14px)] -translate-y-1/2 object-contain object-center opacity-0 md:w-[52%] md:-translate-x-1/2 md:opacity-[0.24]"
              />
              <div
                className="pointer-events-none absolute left-1/2 top-[47%] z-[1] w-[82%] max-w-none translate-x-[calc(-50%_-_14px)] -translate-y-1/2 [aspect-ratio:1462/1443] mix-blend-normal md:mix-blend-soft-light opacity-[0.3] bg-[linear-gradient(to_right,rgba(255,255,255,0.92)_0%,rgba(244,248,255,0.88)_28%,rgba(234,242,252,0.78)_58%,rgba(220,234,248,0.56)_82%,rgba(220,234,248,0.28)_100%)] md:w-[52%] md:-translate-x-1/2 md:opacity-[0.34] md:bg-[linear-gradient(to_right,rgba(226,232,240,0.18)_0%,rgba(148,163,184,0.14)_38%,rgba(71,85,105,0.2)_72%,rgba(51,65,85,0.28)_100%)]"
                style={whereGoingMapTonalOverlayMask}
                aria-hidden
              />
              {/* Star shapes only (SVG as mask) — no full-viewport img rectangle */}
              <div
                className="hero-about-wg-stars-clip pointer-events-none absolute left-1/2 top-[48%] translate-x-[calc(-50%_+_74px)] md:translate-x-[calc(-50%_+_112px)] z-[2] w-[82%] max-w-none -translate-y-1/2 [aspect-ratio:1462/1443] md:w-[52%]"
                style={whereGoingEuLayerMask}
                aria-hidden
              >
                <div
                  className="absolute inset-0 md:[filter:drop-shadow(0_0_10px_rgba(148,163,184,0.32))_drop-shadow(0_0_22px_rgba(203,213,225,0.18))]"
                >
                  <img
                    src="/branding/icon-star-ue.svg"
                    alt=""
                    width={887}
                    height={883}
                    decoding="async"
                    className="hero-about-wg-stars-img pointer-events-none absolute left-1/2 top-1/2 max-h-[68%] max-w-[68%] -translate-x-1/2 -translate-y-1/2 object-contain object-center opacity-[0.68] md:opacity-[0.34]"
                  />
                </div>
              </div>
            </div>
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full min-h-[14rem] w-full select-none"
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
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.14" />
                  <stop offset="40%" stopColor="#4338ca" stopOpacity="0.08" />
                  <stop offset="75%" stopColor="#312e81" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="about-where-glow-violet"
                  cx="55%"
                  cy="52%"
                  r="55%"
                >
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#312e81" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="about-where-glow-cool"
                  cx="45%"
                  cy="55%"
                  r="50%"
                >
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.09" />
                  <stop offset="60%" stopColor="#4338ca" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
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
              <g mask="url(#about-where-soft-edge)" opacity={0.55}>
                <ellipse
                  cx={400}
                  cy={152}
                  rx={340}
                  ry={165}
                  fill="url(#about-where-glow-core)"
                  filter="url(#about-where-blur-deep)"
                  opacity={0.55}
                />
                <ellipse
                  cx={380}
                  cy={168}
                  rx={260}
                  ry={200}
                  fill="url(#about-where-glow-violet)"
                  filter="url(#about-where-blur-mid)"
                  opacity={0.45}
                />
                <ellipse
                  cx={430}
                  cy={145}
                  rx={220}
                  ry={150}
                  fill="url(#about-where-glow-cool)"
                  filter="url(#about-where-blur-mid)"
                  opacity={0.42}
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
