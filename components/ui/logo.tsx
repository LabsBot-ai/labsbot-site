import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="LabsBot">
      <Image
        src="/branding/labsbot-logo.png"
        alt="LabsBot"
        width={128}
        height={32}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
