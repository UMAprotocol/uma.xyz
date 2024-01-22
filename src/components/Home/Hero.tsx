import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import { LazyMotion, m } from "framer-motion";
import NextLink from "next/link";
import { useEffect, useRef } from "react";
import { Icon } from "../Icon";

const loadFeatures = () => import("../../utils/features").then((res) => res.default);

const heroVideoBackgroundIphone = "#232124";
const heroVideoBackgroundWindows = "#252125";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const platform = window.navigator.platform;
    const root = document.documentElement;
    if (platform === "iPhone" || platform === "iPad" || platform === "Android") {
      root.style.setProperty("--hero-video-background", heroVideoBackgroundIphone);
    }
    if (platform === "Win32") {
      root.style.setProperty("--hero-video-background", heroVideoBackgroundWindows);
    }
  }, []);

  const headerAnimation = {
    initial: {
      opacity: 0,
      y: "20%",
    },
    animate: {
      opacity: 1,
      y: "0%",
    },
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  };

  function makeHeaderRotateAnimation(degrees: number) {
    return {
      initial: {
        rotate: `${degrees}deg`,
      },
      animate: {
        rotate: "0deg",
      },
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    };
  }

  return (
    <LazyMotion features={loadFeatures}>
      <section
        className="relative grid max-h-[1200px] w-full place-items-center overflow-clip bg-[--hero-video-background] px-[--page-padding]"
        style={{
          height: "calc(100svh - var(--header-height) - var(--vote-ticker-height))",
        }}
        ref={ref}
      >
        {/* <Image fill alt="hero background image lines" src="/assets/hero-bg-lines.svg" /> */}
        <m.div
          className="absolute bottom-0 left-0 right-0"
          initial={{ opacity: 0, x: "-10%", y: "10%" }}
          animate={{ opacity: 1, x: "0%", y: "0%" }}
          transition={{ duration: 0.3 }}
        >
          <video
            className="mx-auto w-full object-cover opacity-10 mix-blend-luminosity lg:w-[80%]"
            autoPlay
            loop
            muted
            playsInline
            style={{
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              WebkitBackfaceVisibility: "hidden",
              MozBackfaceVisibility: "hidden",
            }}
          >
            <source src="/assets/hero.webm" type="video/webm" />
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
        </m.div>

        <div className="mx-auto grid h-full max-w-[--page-width] grid-rows-[1fr_20%] items-center justify-items-center">
          <m.div className="justify- mb-3 flex flex-col items-center gap-8 lg:mb-0" {...headerAnimation}>
            <m.h1 className="z-10 text-center text-sm-fluid text-white md:text-md-fluid lg:text-lg-fluid">
              <m.div {...makeHeaderRotateAnimation(-3)}>A decentralized </m.div>
              <m.span {...makeHeaderRotateAnimation(-6)}>truth</m.span>
              <m.span className="mx-2 inline-block align-middle md:mx-4" {...makeHeaderRotateAnimation(8)}>
                <Icon
                  name="oo-logo"
                  className="h-[--sm-fluid-font-size] 
                  w-[calc(var(--sm-fluid-font-size)_*_2)]
                  md:h-[--md-fluid-font-size]
                  md:w-[calc(var(--md-fluid-font-size)_*_2)] 
                  lg:h-[--lg-fluid-font-size] 
                  lg:w-[calc(var(--lg-fluid-font-size)_*_2)] 
                  [&>path]:fill-white"
                />
              </m.span>
              <m.span {...makeHeaderRotateAnimation(4)}>machine</m.span>
            </m.h1>
            <m.h2 className="text-md z-10 mx-auto max-w-[min(562px,80%)] text-center text-grey-500 md:text-lg xl:text-xl">
              UMA&apos; s optimistic oracle (OO) can record any verifiable truth or data onto a blockchain.
            </m.h2>
          </m.div>
          <m.div
            className="self-start"
            initial={{
              opacity: 0,
              y: "50px",
            }}
            animate={{
              opacity: 1,
              y: "0px",
            }}
            transition={{
              duration: 0.3,
              delay: 1.3,
            }}
          >
            <NextLink
              className="hover:bg-red-510/15 isolate flex h-12 w-12 items-center justify-center gap-2 rounded-lg border border-solid border-red bg-[--hero-video-background] p-2 transition hover:shadow-[0px_0px_50px_0px_var(--red)]"
              href="#how-it-works"
              aria-label="Go to next section"
            >
              <Icon name="arrow-down" className="h-5 w-5 animate-arrow text-red" />
            </NextLink>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
