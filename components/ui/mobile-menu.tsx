"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on tap/click outside (pointerdown works reliably on iOS)
  useEffect(() => {
    const closeIfOutside = (e: PointerEvent): void => {
      if (!mobileNavOpen || !mobileNav.current || !trigger.current) return;
      const target = e.target as Node;
      if (mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("pointerdown", closeIfOutside, true);
    return () => document.removeEventListener("pointerdown", closeIfOutside, true);
  }, [mobileNavOpen]);

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex shrink-0 md:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        ref={trigger}
        className={`group inline-flex h-8 w-8 touch-manipulation items-center justify-center text-center text-gray-200 transition ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen((o) => !o)}
      >
        <span className="sr-only">Menu</span>
        <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
          <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
          <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
          <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="div"
          id="mobile-nav"
          role="navigation"
          className="absolute left-0 right-0 top-full z-[100] mt-2 w-full min-w-[12rem] rounded-xl bg-gray-900/95 shadow-lg backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] transform transition ease-out duration-200 data-enter:data-closed:-translate-y-2 data-closed:opacity-0"
        >
          <div className="flex flex-col">
            <ul className="p-2 text-sm">
              <li>
                <Link
                  href="/pricing"
                  className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                  onClick={() => setMobileNavOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/help/frequently-asked-questions"
                  className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Help Centre
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/404"
                  className="flex rounded-lg px-2 py-1.5 text-white hover:text-indigo-500"
                  onClick={() => setMobileNavOpen(false)}
                >
                  404
                </Link>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
