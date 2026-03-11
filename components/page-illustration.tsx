import Image from "next/image";
import Illustration from "@/public/images/page-illustration.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function PageIllustration({
  multiple = false,
}: {
  multiple?: boolean;
}) {
  return (
    <>
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 w-full max-w-[846px] -translate-x-1/4"
        aria-hidden="true"
      >
        <Image
          className="w-full max-w-full"
          src={Illustration}
          width={846}
          height={594}
          alt="Page illustration"
        />
      </div>
      {multiple && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -mt-20 w-full max-w-[760px] -translate-x-full opacity-50"
            aria-hidden="true"
          >
            <Image
              className="w-full max-w-full"
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-[440px] -z-10 w-full max-w-[760px] -translate-x-1/3"
            aria-hidden="true"
          >
            <Image
              className="w-full max-w-full"
              src={BlurredShape}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
        </>
      )}
    </>
  );
}
