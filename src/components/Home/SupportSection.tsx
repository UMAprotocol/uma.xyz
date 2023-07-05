import NextLink from "next/link";
import UpRightArrowLg from "public/assets/up-right-arrow-lg.svg";
import { useRef } from "react";

export default function SupportSection() {
  const id = "support";
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative isolate bg-[linear-gradient(180deg,#ffffff_0%,#f9f9f9_100%)] px-[--page-padding] pb-6"
      id={id}
      ref={ref}
    >
      <div>
        <video
          className="pointer-events-none absolute right-0 top-0 h-full w-full object-cover mix-blend-luminosity"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/uma.xyz.mp4" type="video/mp4" />
          <source src="/assets/uma.xyz.webm" type="video/webm" />
        </video>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-[linear-gradient(0deg,#f0f0f0_0%,rgba(255,255,255,0.45)_50%,#ffffff_100%)]" />
        <div className="bg-[linear-gradient(90deg,rgba(255, 255, 255, 1)_0%,rgba(255,255,255,0.85)_50%,rgba(255, 255, 255, 1)_100%)] pointer-events-none absolute left-0 top-0 h-full w-[60%]" />
      </div>
      <div className="pointer-events-auto relative z-10 mx-auto grid min-h-[min(1024px,80dvh)] max-w-[--page-width] items-center">
        <div>
          <div className="max-w-[400px] text-6xl sm:max-w-[562px]">
            <h2 className="mb-6 text-3xl sm:text-6xl">Supported by the Risk Labs Foundation</h2>
            <h3 className="mb-[74px] text-lg sm:text-xl">
              Risk Labs is the foundation and team behind UMA. Risk Labs&apos; mission is to make global markets
              universally fair, accessible, secure and decentralized.
            </h3>
          </div>
          <div className="mt-9 grid gap-6 sm:mt-16">
            <NextLink
              className="group flex w-fit items-center gap-5 transition-[gap] hover:gap-4 hover:text-red"
              href="https://jobs.lever.co/risklabs"
              target="_blank"
            >
              <div className="grid h-[40px] w-[40px] place-items-center rounded-[10px] border-[1.5px] border-grey-800 transition duration-300 group-hover:border-red group-hover:bg-red">
                <UpRightArrowLg className="[&_path]:transition [&_path]:duration-300 [&_path]:group-hover:stroke-white" />
              </div>
              <span className="text-3xl transition sm:text-5xl">Careers</span>
            </NextLink>
            <NextLink
              className="group flex w-fit items-center gap-5 transition-[gap] hover:gap-4 hover:text-red"
              href="https://risklabs.foundation"
              target="_blank"
            >
              <div className="grid h-[40px] w-[40px] place-items-center rounded-[10px] border-[1.5px] border-grey-800 transition duration-300 group-hover:border-red group-hover:bg-red">
                <UpRightArrowLg className="[&_path]:transition [&_path]:duration-300 [&_path]:group-hover:stroke-white" />
              </div>
              <span className="text-3xl transition sm:text-5xl">About</span>
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
