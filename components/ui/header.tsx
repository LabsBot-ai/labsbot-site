"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { useLandingLang } from "@/components/landing-language-provider";
import { translations, type LandingLang } from "@/lib/landing-translations";
import { supabase } from "@/lib/supabaseClient";

const LANG_OPTIONS: { code: LandingLang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
];

const FLAG_CLASS: Record<LandingLang, string> = {
  en: "fi fi-gb",
  de: "fi fi-de",
  ru: "fi fi-ru",
};

function HeaderLanguageMenu() {
  const { lang, setLang } = useLandingLang();
  const [open, setOpen] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const apply = () => setIsCoarsePointer(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const currentLabel =
    LANG_OPTIONS.find((o) => o.code === lang)?.label ?? "English";
  const currentShort = lang.toUpperCase();

  return (
    <div
      ref={rootRef}
      className="relative z-[100] shrink-0"
      onMouseEnter={() => !isCoarsePointer && setOpen(true)}
      onMouseLeave={() => !isCoarsePointer && setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex shrink-0 cursor-pointer touch-manipulation items-center justify-center gap-1 rounded-lg px-2 py-2.5 text-sm font-medium border border-white/20 text-white/90 bg-transparent hover:bg-white/10 transition md:px-3 max-md:max-w-[3.2rem] max-md:gap-0.5 max-md:px-1.5 max-md:truncate"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Language"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="block md:hidden">{currentShort}</span>
        <span className="hidden max-w-[6.5rem] truncate md:block md:max-w-none">{currentLabel}</span>
        <svg
          className={`h-3.5 w-3.5 shrink-0 text-white/60 transition-transform ${open ? "rotate-180" : ""}`}
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
      {open ? (
        <div className="absolute right-0 top-full z-[110] pt-1">
          <ul
            className="min-w-[10.5rem] rounded-lg border border-white/10 bg-slate-900/95 py-1 shadow-lg backdrop-blur-xl max-md:min-w-0 max-md:w-max"
            role="listbox"
          >
            {LANG_OPTIONS.map(({ code }) => (
              <li key={code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={lang === code}
                  className={`flex w-full cursor-pointer px-3 py-2 text-left text-sm transition hover:bg-white/10 ${
                    lang === code ? "text-white bg-white/10" : "text-white/90"
                  }`}
                  onClick={() => {
                    setLang(code);
                    setOpen(false);
                  }}
                >
                  <span className="inline-flex w-full items-center gap-1.5">
                    <span className={`${FLAG_CLASS[code]} w-5 h-5 rounded-sm`} aria-hidden />
                    <span>{code.toUpperCase()}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default function Header() {
  const { lang } = useLandingLang();
  const t = (key: keyof typeof translations["en"]) => translations[lang][key];
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const initSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!isMounted) return;
      setUserEmail(session?.user?.email ?? null);
    };

    void initSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Sign out error:", error.message);
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex min-w-0 items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-white/10">
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
                  {t("nav_products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="flex items-center px-2 py-1 text-xl font-semibold tracking-wide text-white transition hover:text-gray-200 lg:px-2"
                >
                  {t("nav_pricing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center px-2 py-1 text-xl font-semibold tracking-wide text-white transition hover:text-gray-200 lg:px-2"
                >
                  {t("nav_blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center px-2 py-1 text-xl font-semibold tracking-wide text-white transition hover:text-gray-200 lg:px-2"
                >
                  {t("nav_about")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Sign in, Register, Mobile menu */}
          <div className="flex min-w-0 flex-1 items-center justify-end gap-1 ml-auto md:flex-none md:shrink-0 md:gap-2">
            <HeaderLanguageMenu />
            {!userEmail ? (
              <>
                <Link
                  href="/signin"
                  className="inline-flex w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-white/20 bg-transparent px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 max-md:px-1.5 md:shrink-0"
                >
                  {t("btn_signin")}
                </Link>
                <div className="relative flex min-w-0 max-md:flex-1 max-md:min-w-0 items-center md:inline-flex md:shrink-0">
                  <div
                    className="absolute -inset-0.5 blur-lg opacity-40 rounded-lg bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600"
                    aria-hidden
                  />
                  <Link
                    href="/signup"
                    className="relative inline-flex w-full min-w-0 items-center justify-center rounded-lg bg-linear-to-t from-indigo-500 via-violet-500 to-purple-600 bg-[length:100%_100%] bg-[bottom] px-4 py-2.5 text-sm font-medium text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,.16)] transition-all hover:bg-[length:100%_150%] max-md:truncate max-md:px-2 md:inline-flex md:w-auto md:max-w-none md:shrink-0"
                  >
                    {t("btn_register")}
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/account"
                  className="inline-flex min-w-0 max-w-[min(100%,7rem)] shrink cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-transparent px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 max-md:flex-1 max-md:truncate md:max-w-none md:flex-none md:shrink-0"
                  aria-label="My account"
                >
                  My account
                </Link>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="inline-flex min-w-0 max-w-[min(100%,7rem)] shrink cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-transparent px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 max-md:flex-1 max-md:truncate md:max-w-none md:flex-none md:shrink-0"
                >
                  Sign out
                </button>
              </>
            )}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
