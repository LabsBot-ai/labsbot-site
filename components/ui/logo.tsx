import Link from "next/link";
import Image from "next/image";

function LogoIcon() {
  return (
    <div className="w-10 h-10 shrink-0 overflow-hidden flex items-center">
      <Image
        src="/branding/labsbot-logo.svg"
        alt=""
        width={80}
        height={40}
        priority
        className="h-10 w-20 object-cover object-left"
      />
    </div>
  );
}

export default function Logo({ className, mobileIconOnly }: { className?: string; mobileIconOnly?: boolean }) {
  return (
    <Link href="/" className={className} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      {mobileIconOnly ? (
        <LogoIcon />
      ) : (
        <Image
          src="/branding/labsbot-logo.svg"
          alt="LabsBot"
          width={320}
          height={64}
          priority
          className={className || "h-10 md:h-12 lg:h-14 w-auto"}
        />
      )}
    </Link>
  );
}
