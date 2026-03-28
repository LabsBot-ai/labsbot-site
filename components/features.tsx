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
          <div className="flex justify-center pb-8 md:pb-12" data-aos="fade-up">
            <div className="relative flex min-h-[10rem] w-full max-w-[320px] items-center justify-center py-2 sm:min-h-[11rem]">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[min(380px,110%)] w-[min(380px,110%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(99_102_241_/_0.35),rgb(139_92_246_/_0.18)_50%,transparent_70%)] blur-3xl opacity-70 animate-pulse"
                aria-hidden
              />
              <div className="relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="relative z-10 h-28 w-auto max-w-[240px] object-contain drop-shadow-[0_0_20px_rgba(99,102,241,0.55),0_0_50px_rgba(139,92,246,0.45),0_0_90px_rgba(56,189,248,0.35)] sm:h-32 md:h-36 md:max-w-[280px]" aria-hidden>
                  <defs>
                    <linearGradient
                      id="labsbotNeonCore"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(-518.91044,-52.770551)">
                    <path
                      fill="url(#labsbotNeonCore)"
                      d="m 727.96197,513.02577 v -305 h 311.50013 311.5 v 305 305 h -311.5 -311.50013 z m 594.75183,-0.25174 0.2518,-276.75174 -283.2518,0.25174 -283.25183,0.25174 -0.25611,275.5 c -0.14086,151.525 -0.0422,276.06329 0.21929,276.75175 0.37943,0.99907 57.55581,1.20093 283.25615,1 l 282.7808,-0.25175 z M 881.46202,687.90915 c -8.196,-1.19216 -17.4202,-4.23486 -27.2489,-8.98833 -15.4864,-7.48964 -28.2529,-23.52488 -33.75304,-42.39505 -3.8955,-13.36493 -4.24671,-28.47444 -4.1146,-177.01726 l 0.11649,-130.98274 26.72675,-0.26629 26.7268,-0.26629 0.2732,141.76629 0.2733,141.76629 2.2608,6.65494 c 2.4033,7.0745 6.977,13.56463 11.4783,16.28806 1.5065,0.91149 5.3315,2.55244 8.5,3.64654 5.4794,1.89212 9.3252,2.01761 78.72825,2.56906 l 72.96733,0.57978 -0.019,10.63081 c -0.01,5.84694 -0.1082,16.59331 -0.2173,23.88081 l -0.1985,13.25 -78.25003,-0.12194 c -43.03755,-0.0671 -80.95005,-0.51468 -84.25005,-0.99468 z m 188.95638,-0.13668 c -0.2723,-0.70949 -0.3739,-11.49564 -0.2257,-23.96922 l 0.2694,-22.67923 44.5,-0.36877 c 37.191,-0.3082 45.5676,-0.63981 51,-2.01894 20.5814,-5.22508 31.3206,-13.13654 37.8688,-27.89759 4.4883,-10.11775 5.5224,-16.32251 4.7739,-28.64547 -1.0411,-17.14187 -6.3006,-29.60633 -17.2061,-40.77638 -5.9872,-6.13249 -12.5712,-9.54803 -23.7969,-12.34495 -7.6417,-1.90397 -11.6101,-2.04052 -64.8618,-2.23176 -31.1971,-0.11204 -57.0721,0.14639 -57.5,0.57428 -0.4278,0.4279 -0.7779,20.0905 -0.7779,43.69466 v 42.91667 h -27.75 -27.75003 V 470.97828 327.93079 l 81.75003,0.20981 c 44.9625,0.1154 86.475,0.53383 92.25,0.92983 13.9639,0.95754 31.8334,5.68166 42.3552,11.19734 6.3166,3.31124 10.479,6.59266 18.72,14.758 11.2484,11.14513 13.9465,15.43451 18.0965,28.76973 4.0432,12.99165 4.8783,17.84918 5.4552,31.73027 0.4985,11.99561 0.2712,15.49976 -1.5874,24.47528 -4.7954,23.1572 -14.6212,38.77484 -32.4188,51.52799 -6.9277,4.96416 -7.4396,7.71035 -1.8707,10.03585 13.9015,5.80516 29.1482,18.15619 37.1584,30.10123 17.363,25.89259 21.2602,70.86862 8.5021,98.11897 -1.8758,4.0065 -3.4105,7.55166 -3.4105,7.87813 0,1.40942 -9.1747,14.22279 -12.9181,18.04144 -13.1044,13.36789 -24.9436,20.6375 -42.7825,26.26969 -19.3575,6.11166 -28.0769,6.85796 -81.5738,6.98199 -36.5303,0.0847 -45.8743,-0.15439 -46.2693,-1.18387 z m 86.1663,-211.77957 c 15.7603,-4.22345 25.2828,-11.22808 31.3823,-23.08434 5.6648,-11.01134 7.5166,-26.55852 4.5121,-37.88279 -2.2342,-8.42085 -8.4054,-19.53512 -13.8596,-24.96077 -5.9828,-5.95151 -12.4944,-9.44514 -22.4786,-12.06025 -7.0593,-1.849 -10.9504,-1.97898 -59.2422,-1.97898 h -51.6866 l -0.6458,3.22861 c -0.6742,3.37132 -0.5519,77.54049 0.1502,91.02139 l 0.4036,7.75 h 51.9393 c 49.0649,0 52.3592,-0.11251 59.5253,-2.03287 z"
                    />
                    <path
                      fill="none"
                      stroke="url(#labsbotNeonCore)"
                      strokeWidth={5}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="m 727.96197,513.02577 v -305 h 311.50013 311.5 v 305 305 h -311.5 -311.50013 z"
                    />
                  </g>
                </svg>
              </div>
            </div>
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
