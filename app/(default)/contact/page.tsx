export const metadata = {
  title: "Contact us - Open PRO",
  description: "Page description",
};

import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import FooterSeparator from "@/components/footer-separator";

export default function Contact() {
  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                Contact the LabsBot team
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="text-xl text-indigo-200/65">
                  Write to us — we read every message.
                </p>
              </div>
            </div>
            {/* Contact form */}
            <form className="mx-auto max-w-[640px]">
              <div className="space-y-5">
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="message"
                  >
                    Message (Full description)
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="form-textarea w-full text-gray-200"
                    placeholder="Include as much details as you can"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="mt-8 flex w-full flex-col justify-between gap-5 md:flex-row md:items-center">
                <p className="text-sm text-indigo-200/65">
                  By sending this message you agree to our{" "}
                  <Link className="underline hover:no-underline" href="/terms">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link className="underline hover:no-underline" href="/privacy">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <div>
                  <button className="btn group w-full cursor-pointer bg-linear-to-t from-indigo-500 via-violet-500 to-purple-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] transition-all">
                    <span className="relative inline-flex items-center">
                      Send message
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
