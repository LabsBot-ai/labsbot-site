import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="LabsBot">
      <div className="logo-gradient">
        <Image
          src="/branding/labsbot-logo.png"
          alt="LabsBot"
          width={170}
          height={44}
          priority
        />
      </div>
    </Link>
  );
}
