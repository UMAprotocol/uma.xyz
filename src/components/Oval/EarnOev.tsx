"use client";
import { cn } from "@/utils/styleUtils";
import { ExternalLink } from "./ExternalLink";
import Spline from "@splinetool/react-spline";

export type EarnOevProps = {
  className?: string;
};

export const EarnOev = ({ className }: EarnOevProps) => {
  return (
    <section
      className={cn(
        "relative mx-auto mt-[128px] max-w-[1200px] flex-col items-center overflow-clip px-[--page-padding] ",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-8 xl:flex-row xl:justify-center xl:gap-24">
        <Spline
          className="pointer-events-none !h-[440px] min-[472px]:!h-[720px]"
          scene="https://prod.spline.design/6fMUQ-8iv1LJxomb/scene.splinecode"
        />

        <div className="flex max-w-[500px] flex-1 flex-col items-center gap-8 xl:items-start">
          <h2 className="text-gradient-oval whitespace-nowrap text-center text-sm-fluid md:text-md-fluid lg:text-lg-fluid xl:text-left">
            Earn OEV
          </h2>
          <p className="text-center text-xl text-[#B3B5B4] xl:text-left">
            Legacy oracles leave you vulnerable to MEV searchers. OVAL wraps your existing oracle and shields you from
            searchers.
          </p>
          <p className="text-center  text-xl text-[#B3B5B4] xl:text-left">
            OVAL integrates with Flashbots&apos; MEV-Share to auction your OEV, so that you capture the value you
            create.
          </p>
          <ExternalLink href="https://docs.uma.xyz/">learn more in docs</ExternalLink>
        </div>
      </div>
    </section>
  );
};
