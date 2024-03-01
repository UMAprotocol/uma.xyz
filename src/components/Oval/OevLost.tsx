import { Divider } from "./Divider";
import { Ellipse } from "./Ellipsis";
import { Countup } from "./Countup";
import { getOevLost } from "@/lib/dune";
import { oevLostFallback } from "@/constant";
import { ONE_DAY_SECONDS, duneActive } from "@/lib/constants";
import { HelpPopover } from "./HelpPopover";
import Link from "next/link";

export const revalidate = ONE_DAY_SECONDS;

export const OevLost = async () => {
  const oevLost = duneActive ? (await getOevLost()).max_potential_revenue_usd : parseInt(oevLostFallback);

  return (
    <section className="relative mx-auto mb-[150px] flex max-w-[828px] flex-col items-center gap-2 px-[--page-padding] text-center xl:mb-[200px]">
      <Ellipse className="right-[-20%]" />
      <h3 className="flex items-center justify-center gap-1 text-sm uppercase leading-6 tracking-widest text-white/50 md:text-base lg:text-lg">
        MAINNET OEV LEAKED BY AAVE V2 & V3, COMPOUND V2 & V3{" "}
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
      <Countup number={oevLost} />
      <Divider className="mt-[100px] w-[120px] rotate-90 lg:mt-[150px] lg:w-[200px]" />
    </section>
  );
};
