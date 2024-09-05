"use client";
import { useSetPlatform } from "@/hooks/helpers/useSetPlatform";
import Link from "next/link";

export const Hero = () => {
  useSetPlatform();

  return (
    <section className="relative mx-auto mt-12 flex max-w-[828px] flex-col items-center justify-center gap-4 px-[--page-padding] pb-[94px] text-center align-top xl:pb-[128px]">
      <div className="aspect-square h-fit max-h-[400px] w-full max-w-[600px] flex-1 shrink-0 ">
        <video
          aria-hidden="true"
          className="object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          disableRemotePlayback
        >
          <source src="assets/hero-oval.mp4" type="video/mp4" />
        </video>
      </div>

      <h1 className="text-gradient-oval relative px-[10%] text-center text-sm-fluid lg:text-md-fluid 2xl:text-lg-fluid">
        Get paid to use price oracles
      </h1>
      <div className="relative flex flex-col items-center gap-6 lg:w-[80%] xl:flex-row xl:gap-8">
        <h2 className="text-gradient-oval px-[10%] text-xl opacity-75 xl:px-0">
          Your protocol creates value when it consumes price updates. Capture this value with Oval.
        </h2>
        <Link
          className="justify-self-end whitespace-nowrap rounded-lg bg-red px-6 py-4 text-lg text-background no-underline transition hover:opacity-75 xl:w-fit"
          href="https://docs.oval.xyz/"
          target="_blank"
        >
          View docs
        </Link>
      </div>
    </section>
  );
};
