"use client";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "use-count-up";
import { oevLost } from "@/constant/env";
import { Roboto_Mono } from "next/font/google";
import { useIntersectionObserver } from "usehooks-ts";

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
    <section
      className={`relative mx-auto flex max-w-[828px] flex-col items-center gap-2 px-[--page-padding] text-center ${roboto.className}`}
    >
      <div
        style={{
          perspective: "500px",
        }}
      >
        <h3 className="text-md uppercase leading-6 text-white opacity-50">total oev lost in 2023</h3>
        <div
          ref={ref}
          className="bg-gradient-to-r from-white to-[hsla(0,0%,72%,1)] bg-clip-text text-md-fluid text-transparent lg:text-lg-fluid"
        >
          ${value}
        </div>
        <div
          style={{
            transform: "rotate3d(1, 0, 0, 40deg) translateY(1.1em) rotateX(180deg)",
            transformOrigin: "center top",
          }}
          className="select-none text-md-fluid text-white opacity-5 lg:text-lg-fluid"
        >
          ${value}
        </div>
      </div>
    </section>
  );
};
