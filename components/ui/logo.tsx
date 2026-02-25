import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="LabsBot">
      <img
        src="/branding/labsbot-logo.png"
        alt="LabsBot"
        className="h-8 w-[140px] object-contain shrink-0"
        loading="eager"
      />
    </Link>
  );
}
