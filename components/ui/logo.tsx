import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="LabsBot">
      <img
        src="/branding/labsbot-logo.png"
        alt="LabsBot"
        className="h-[58px] w-auto object-contain shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
        loading="eager"
      />
    </Link>
  );
}
