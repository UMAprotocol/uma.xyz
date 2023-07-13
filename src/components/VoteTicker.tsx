"use client";

import { grey100, grey200, grey300, grey600, grey700, grey800, grey900, red, white } from "@/constant";
import { useVotingInfo } from "@/hooks";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Clock from "public/assets/clock.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { CSSProperties, useState } from "react";
import { useInterval } from "usehooks-ts";

export default function VoteTicker({ isLightTheme: isLightTheme_ = false }) {
  const { data } = useVotingInfo();
  const [timeRemaining, setTimeRemaining] = useState("--:--:--");
  const isActive = !!data && data.activeRequests > 0;
  const pathname = usePathname();
  const isHomePage = pathname?.split("#")[0] === "/";
  const isLightTheme = !isHomePage || isLightTheme_;
  useInterval(() => {
    setTimeRemaining(formatMillisecondsUntilMidnight());
  }, 1000);

  function getMillisecondsUntilMidnight() {
    const now = new Date();
    const midnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
    return midnight.getTime() - now.getTime();
  }

  function formatMillisecondsUntilMidnight() {
    const milliseconds = getMillisecondsUntilMidnight();
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours.toString().padStart(2, "0")}:${(minutes % 60).toString().padStart(2, "0")}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <motion.div
      className="grid h-[--vote-ticker-height] place-items-center bg-[--background] bg-cover bg-no-repeat pb-1 pt-4 lg:px-[--page-padding]"
      initial={{ opacity: 0, y: "-20px" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.3, delay: 0.8 }}
      style={
        {
          "--background": isLightTheme ? "transparent" : "var(--hero-video-background)",
          "--color": isLightTheme ? grey900 : grey300,
        } as CSSProperties
      }
    >
      <div
        className="isolate flex w-full max-w-[--page-width] items-center justify-between gap-4 rounded-lg bg-cover bg-no-repeat p-2 pr-4"
        style={{
          backgroundColor: isLightTheme ? grey200 : grey700,
          backgroundImage: isLightTheme ? `url("/assets/white-lines.png")` : `url("/assets/black-lines.png")`,
        }}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center gap-2 rounded-full bg-red/10">
            <Clock />
          </div>
          {isActive ? (
            <>
              <div className="text-[--color]">
                <span className="hidden sm:inline">Time to {data.phase} vote: </span>
                <span className="sm:hidden">{data.phase} vote: </span>
                <span
                  className="ml-1 inline-block min-w-[96px] text-[--color]"
                  style={
                    {
                      "--color": isLightTheme ? red : white,
                    } as CSSProperties
                  }
                >
                  {timeRemaining}
                </span>
              </div>
              <div
                className="hidden h-fit whitespace-nowrap rounded-xl bg-[--background] px-2 py-1 text-[--color] sm:block"
                style={
                  {
                    "--background": isLightTheme ? grey600 : grey800,
                    "--color": isLightTheme ? grey100 : grey300,
                  } as CSSProperties
                }
              >
                {data.activeRequests === 1 ? "1 vote" : `${data.activeRequests} votes`}
              </div>
            </>
          ) : (
            <div className="text-[--color]">
              <span className="hidden sm:inline">No active votes</span>
              <span className="sm:hidden">No votes</span>
            </div>
          )}
        </div>
        <div>
          <NextLink
            className="flex items-center gap-2 transition duration-300 hover:brightness-150 [&_path]:stroke-[--color]"
            href="https://vote.uma.xyz/"
            target="_blank"
            aria-label="Link to voter dapp"
          >
            <span className="hidden text-[--color] sm:inline">More details</span>
            <UpRightArrow />
          </NextLink>
        </div>
      </div>
    </motion.div>
  );
}
