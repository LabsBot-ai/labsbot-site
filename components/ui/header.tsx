"use client";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md">
          {/* Site branding */}
          <div className="flex items-center shrink-0">
            <div className="md:hidden shrink-0">
              <Logo mobileIconOnly className="shrink-0" />
            </div>
            <div className="hidden md:block shrink-0">
              <Logo className="h-10 md:h-12 lg:h-14 w-auto shrink-0" />
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-2">
              <li>
                <Link
                  href="/pricing"
                  className="flex items-center px-2 py-1 text-xl font-semibold tracking-wide text-white transition hover:text-gray-200 lg:px-2"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center px-2 py-1 text-xl font-semibold tracking-wide text-white transition hover:text-gray-200 lg:px-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center px-2 py-1 text-xl font-semibold tracking-wide text-white transition hover:text-gray-200 lg:px-2"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/help/frequently-asked-questions"
                  className="flex items-center px-2 py-1 text-xl font-semibold tracking-wide text-white transition hover:text-gray-200 lg:px-2"
                >
                  Help Centre
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Resources">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/newsletter"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    404
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          {/* Sign in, Register, Mobile menu */}
          <div className="flex items-center gap-2 ml-auto shrink-0">
            <Link
              href="/signin"
              className="shrink-0 inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium md:btn-sm md:px-3 md:py-[5px] relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="shrink-0 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium md:btn-sm md:px-4 md:py-2 bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
            >
              Register
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
