import { cn } from "@/utils/styleUtils";
import Image from "next/image";
import earnOevIMage from "public/assets/oval-earn-oev.webp";
import { ExternalLink } from "./ExternalLink";

export type EarnOevProps = {
  className?: string;
};

export const EarnOev = ({ className }: EarnOevProps) => {
  return (
    <section
      className={cn(
        "relative mx-auto mt-[128px] max-w-[1200px] flex-col items-center overflow-clip px-[--page-padding] xl:pb-[128px]",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-8 xl:flex-row xl:justify-center xl:gap-24">
        <div className="max-w-[500px] flex-1">
          <Image src={earnOevIMage} alt="decorative section image" />
        </div>

        <div className="flex max-w-[500px] flex-1 flex-col items-center gap-8 xl:items-start">
          <h2 className="text-gradient-oval whitespace-nowrap text-center text-sm-fluid md:text-md-fluid lg:text-lg-fluid xl:text-left">
            Earn OEV
          </h2>
          <p className="text-center text-xl text-[#B3B5B4] xl:text-left">
            Legacy oracles leave you vulnerable to MEV searchers. Oval wraps your existing oracle and shields you from
            searchers.
          </p>
          <p className="text-center  text-xl text-[#B3B5B4] xl:text-left">
            Oval integrates with Flashbots&apos; MEV-Share to auction your OEV, so that you capture the value you
            create.
          </p>
          <ExternalLink href="https://docs.uma.xyz/">learn more in docs</ExternalLink>
        </div>
      </div>
    </section>
  );
};
