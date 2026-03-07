import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      <Image
        src="/branding/labsbot-logo.svg"
        alt="LabsBot"
        width={320}
        height={64}
        priority
        style={{ height: "64px", width: "auto" }}
      />
    </Link>
  );
}
