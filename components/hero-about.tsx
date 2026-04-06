import type { CSSProperties } from "react";

/** Right-edge: smooth dissolve — no hard corner; full fade into background. */
const whereGoingMaskHorizontal =
  "linear-gradient(to right, #000 0%, #000 38%, rgba(0,0,0,0.94) 46%, rgba(0,0,0,0.72) 56%, rgba(0,0,0,0.42) 68%, rgba(0,0,0,0.18) 80%, rgba(0,0,0,0.05) 90%, transparent 100%)";

/** Map + stars: horizontal fade only (full composition visible; section handoff uses CTA bridge). */
const whereGoingEuLayerMask: CSSProperties = {
  maskImage: whereGoingMaskHorizontal,
  WebkitMaskImage: whereGoingMaskHorizontal,
};

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
    -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.05) 36%, rgba(0,0,0,0.22) 46%, rgba(0,0,0,0.52) 56%, rgba(0,0,0,0.85) 68%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%);
    mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.05) 36%, rgba(0,0,0,0.22) 46%, rgba(0,0,0,0.52) 56%, rgba(0,0,0,0.85) 68%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
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
}
/* Stars wrapper: no CSS mask — inline whereGoingEuLayerMask suppressed; SVG-only L→R fade. */
.hero-about-wg-stars-clip {
  -webkit-mask-image: none !important;
  mask-image: none !important;
}
`;

/** Shared copy column: 900px max, centered. */
const aboutCopyCol = "mx-auto w-full max-w-[900px] text-center";

/** Who / Why: translateY only on copy column (no extra layout height). */
const aboutWhoShift = "translate-y-[10px] md:translate-y-[16px]";
const aboutWhyShift = "translate-y-[160px] md:translate-y-[200px]";

/** “Where” block: position via transform (no extra section padding). */
const aboutWhereCopyCol =
  "absolute left-1/2 top-[36%] z-10 w-full max-w-[1100px] px-4 text-center [transform:translateX(-50%)_translateY(28px)] md:[transform:translateX(-50%)_translateY(36px)] sm:px-0";

/** WHERE body: wrapped on mobile; single line from md (desktop unchanged). */
const aboutWhereBodyOneLine =
  "w-full text-lg leading-relaxed text-indigo-200/65 text-center [overflow-wrap:break-word] [word-break:normal] md:whitespace-nowrap md:overflow-x-auto md:overflow-y-hidden md:[overflow-wrap:normal]";

/** Section h2 shimmer: mobile-only tighter stops + dual band (same palette); md+ matches previous single 5-stop gradient. */
const aboutSectionHeadingClassName =
  "animate-[gradient_6s_linear_infinite] max-md:bg-[linear-gradient(to_right,var(--color-gray-200)_0%,var(--color-indigo-200)_8%,var(--color-gray-50)_15%,var(--color-indigo-300)_22%,var(--color-gray-200)_30%,var(--color-indigo-200)_44%,var(--color-gray-50)_57%,var(--color-indigo-300)_70%,var(--color-gray-200)_100%)] md:bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-3xl font-semibold text-transparent md:text-4xl";

export default function HeroAbout() {
  return (
    <>
      {/* Section 1 — Who we are */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-3 pt-[48px] text-center md:pb-3 md:pt-[56px]">
            <div className={`${aboutCopyCol} ${aboutWhoShift}`}>
              <h2 className={aboutSectionHeadingClassName}>
                Who we are
              </h2>
              <div className="space-y-2 text-lg leading-relaxed text-indigo-200/65 whitespace-normal [word-break:normal] [overflow-wrap:break-word]">
                <p>
                  We live and work in the Black Forest, Baden-Württemberg —
                  where technology is part of everyday life, not separate from it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Why */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-7 pt-6 md:pb-6 md:pt-6">
            <div className={`${aboutCopyCol} ${aboutWhyShift}`}>
              <h2 className={aboutSectionHeadingClassName}>
                Why we&apos;re building this
              </h2>
              <div className="space-y-2 text-lg leading-relaxed text-indigo-200/65 whitespace-normal [word-break:normal] [overflow-wrap:break-word]">
                <p>
                  We&apos;re developers who&apos;ve experienced firsthand the
                  challenges of starting life in a new country.
                </p>
                <p>
                  That&apos;s why we focus on simplifying integration and build
                  products that help people find their way faster and feel more
                  confident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Where we're going */}
      <section className="relative translate-y-[40px] md:translate-y-[60px]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative min-h-[70vh] md:min-h-[80vh]">
            <style
              dangerouslySetInnerHTML={{ __html: heroAboutWhereGoingMaskStyles }}
            />
            {/* EU map — faint hint, slightly wider than text; tinted + masked */}
            <div
              className="pointer-events-none absolute inset-0 z-[1]"
              aria-hidden
            >
              <img
                src="/branding/maps-eu.svg"
                alt=""
                width={1462}
                height={1443}
                decoding="async"
                className="hero-about-wg-map absolute left-1/2 top-[56%] z-0 w-[82%] max-w-none object-contain object-center opacity-0 md:w-[52%] md:opacity-[0.24] max-md:[transform:translateX(calc(-50%_-_14px))_translateY(calc(-50%_+_36px))_scale(1.12)] md:[transform:translateX(-50%)_translateY(calc(-50%_+_30px))_scale(1.12)]"
              />
              <div
                className="pointer-events-none absolute left-1/2 top-[56%] z-[1] w-[82%] max-w-none [aspect-ratio:1462/1443] mix-blend-normal md:mix-blend-soft-light opacity-[0.3] bg-[linear-gradient(to_right,rgba(255,255,255,0.92)_0%,rgba(244,248,255,0.88)_28%,rgba(234,242,252,0.78)_58%,rgba(220,234,248,0.56)_82%,rgba(220,234,248,0.28)_100%)] md:w-[52%] md:opacity-[0.34] md:bg-[linear-gradient(to_right,rgba(226,232,240,0.18)_0%,rgba(148,163,184,0.14)_38%,rgba(71,85,105,0.2)_72%,rgba(51,65,85,0.28)_100%)] max-md:[transform:translateX(calc(-50%_-_14px))_translateY(calc(-50%_+_36px))_scale(1.12)] md:[transform:translateX(-50%)_translateY(calc(-50%_+_30px))_scale(1.12)]"
                style={whereGoingMapTonalOverlayMask}
                aria-hidden
              />
              {/* Star shapes only (SVG as mask) — no full-viewport img rectangle */}
              <div
                className="hero-about-wg-stars-clip pointer-events-none absolute left-1/2 top-[57%] z-[2] w-[82%] max-w-none [aspect-ratio:1462/1443] md:w-[52%] [transform:translateX(calc(-50%_+_74px))_translateY(calc(-50%_+_20px))] md:[transform:translateX(calc(-50%_+_112px))_translateY(calc(-50%_+_30px))]"
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
              className="pointer-events-none absolute inset-0 z-0 h-full min-h-0 w-full select-none"
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
            <div className={aboutWhereCopyCol}>
              <h2
                className={`max-md:translate-y-3 ${aboutSectionHeadingClassName}`}
              >
                Where we&apos;re going
              </h2>
              <div className={aboutWhereBodyOneLine}>
                <p>
                  As part of the Northern Black Forest technology cluster, we
                  build and scale products across Europe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
