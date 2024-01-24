"use client";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "use-count-up";
import { Roboto_Mono } from "next/font/google";
import { useIntersectionObserver } from "usehooks-ts";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

type CountupProps = {
  number: number;
};

export const Countup = ({ number }: CountupProps) => {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0,
  });

  const isVisible = !!entry?.isIntersecting;

  const { value } = useCountUp({
    isCounting: startCount,
    start: 0,
    end: number,
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
    <div
      style={{
        perspective: "500px",
      }}
    >
      <h3 className="text-md uppercase leading-6 tracking-widest text-white opacity-50">
        TOTAL OEV LEAKED BY AAVE V2 & V3, COMPOUND V2 & V3
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
  );
};
