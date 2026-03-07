import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="labsbot-logo-wrap">
      <Image
        src="/branding/labsbot-logo.svg"
        alt="LabsBot"
        width={170}
        height={44}
        priority
        className="labsbot-logo"
      />
    </Link>
  );
}
