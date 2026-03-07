import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="LabsBot">
      <span
        className="font-nacelle text-2xl font-semibold bg-[linear-gradient(90deg,#c7d2fe,#e0e7ff,#a5b4fc,#ffffff,#c7d2fe)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[logo-shimmer_6s_linear_infinite] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        LabsBot
      </span>
    </Link>
  );
}
