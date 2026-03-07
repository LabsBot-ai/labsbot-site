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

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      <div className="flex items-center gap-2">
        <LogoIcon />
        <span className="hidden md:inline">LabsBot</span>
      </div>
    </Link>
  );
}
