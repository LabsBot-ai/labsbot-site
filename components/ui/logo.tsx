import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      <Image
        src="/branding/labsbot-logo.svg"
        alt="LabsBot"
        width={170}
        height={40}
        priority
        style={{ width: "170px", height: "40px", objectFit: "contain" }}
      />
    </Link>
  );
}
