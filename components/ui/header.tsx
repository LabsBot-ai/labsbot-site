"use client";

import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-white/10">
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
                  href="/#products"
                  className="flex items-center px-2 py-1 text-xl font-semibold tracking-wide text-white transition hover:text-gray-200 lg:px-2"
                >
                  Products
                </Link>
              </li>
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
                  href="/blog"
                  className="flex items-center px-2 py-1 text-xl font-semibold tracking-wide text-white transition hover:text-gray-200 lg:px-2"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center px-2 py-1 text-xl font-semibold tracking-wide text-white transition hover:text-gray-200 lg:px-2"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* Sign in, Register, Mobile menu */}
          <div className="flex items-center gap-2 ml-auto shrink-0">
            <Link
              href="/signin"
              className="shrink-0 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium border border-white/20 text-white/90 bg-transparent hover:bg-white/10 transition"
            >
              Sign In
            </Link>
            <div className="relative shrink-0 inline-flex">
              <div
                className="absolute -inset-0.5 blur-lg opacity-40 rounded-lg bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600"
                aria-hidden
              />
              <Link
                href="/signup"
                className="relative inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,.16)] hover:bg-[length:100%_150%] transition-all"
              >
                Register
              </Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
