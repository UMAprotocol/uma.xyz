"use client";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "use-count-up";
import { oevLost } from "@/constant/env";
import { Roboto_Mono } from "next/font/google";
import { useIntersectionObserver } from "usehooks-ts";
import { Divider } from "./Divider";
import { Ellipse } from "./Ellipsis";
import { HelpPopover } from "./HelpPopover";
import Link from "next/link";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const OevLost = () => {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0,
  });

  const isVisible = !!entry?.isIntersecting;

  const { value } = useCountUp({
    isCounting: startCount,
    start: 0,
    end: parseInt(oevLost),
    duration: 3,
    easing: "easeOutCubic",
    formatter: (num: number) => Math.ceil(num).toLocaleString(),
    decimalPlaces: 0,
  });

  useEffect(() => {
    if (isVisible) {
      setStartCount(true);
    }
  }, [isVisible]);

  return (
    <section className="relative mx-auto mb-[150px] flex max-w-[828px] flex-col items-center gap-2 px-[--page-padding] text-center xl:mb-[200px]">
      <Ellipse className="right-[-20%]" />
      <div
        style={{
          perspective: "500px",
        }}
      >
        <h3 className="text-md flex items-center justify-center gap-1 uppercase leading-6 tracking-widest text-white/50">
          TOTAL OEV LEAKED BY AAVE V2 & V3, COMPOUND V2 & V3{" "}
          <HelpPopover
            text={
              <p>
                For more information about UMA&apos;s theoretical historic OEV methodology, please see the{" "}
                <Link
                  className="items-center text-red transition hover:opacity-50"
                  target="_blank"
                  href="https://docs.oval.xyz/oev-data"
                >
                  OEV data
                </Link>{" "}
                section of our documentation.
              </p>
            }
          />
        </h3>
        <div
          ref={ref}
          className={`bg-gradient-to-r from-white to-[hsla(0,0%,72%,1)] bg-clip-text text-sm-fluid text-transparent sm:text-md-fluid lg:text-lg-fluid ${roboto.className}`}
        >
          ${value}
        </div>
        <div
          style={{
            transform: "rotate3d(1, 0, 0, 40deg) translateY(1.1em) rotateX(180deg)",
            transformOrigin: "center top",
          }}
          className={`select-none text-sm-fluid text-white opacity-5 sm:text-md-fluid lg:text-lg-fluid  ${roboto.className}`}
        >
          ${value}
        </div>
      </div>
      <Divider className="mt-[100px] w-[120px] rotate-90 lg:mt-[150px] lg:w-[200px]" />
    </section>
  );
};
