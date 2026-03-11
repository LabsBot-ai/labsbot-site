import Link from "next/link";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              An intelligent ecosystem for real life
            </h1>
            <div className="mx-auto max-w-3xl">
              <div className="mx-auto mt-8 max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400} className="w-full sm:w-auto mb-4 sm:mb-0">
                  <div className="relative inline-flex w-full sm:w-auto">
                    <div
                      className="absolute -inset-1 blur-xl opacity-40 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600"
                      aria-hidden
                    />
                    <Link
                      className="relative btn group w-full bg-linear-to-t from-indigo-500 via-violet-500 to-purple-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] transition-all sm:w-auto"
                      href="/#products"
                    >
                      <span className="relative inline-flex items-center">
                        Explore products
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <Link
                    className="inline-flex items-center justify-center w-full rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white/90 bg-transparent hover:bg-white/10 transition sm:ml-4 sm:w-auto"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
