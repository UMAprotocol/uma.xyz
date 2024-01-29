import { Divider } from "./Divider";
import { Ellipse } from "./Ellipsis";
import { HelpPopover } from "./HelpPopover";
import Link from "next/link";
import { Countup } from "./Countup";
import { getOevLost } from "@/lib/dune";
import { oevLostFallback } from "@/constant";
import { duneActive } from "@/lib/constants";

export const OevLost = async () => {
  const oevLost = duneActive ? (await getOevLost()).max_potential_revenue_usd : parseInt(oevLostFallback);

  return (
    <section className="relative mx-auto mb-[150px] flex max-w-[828px] flex-col items-center gap-2 px-[--page-padding] text-center xl:mb-[200px]">
      <Ellipse className="right-[-20%]" />

      <Countup number={oevLost} />
      <Divider className="mt-[100px] w-[120px] rotate-90 lg:mt-[150px] lg:w-[200px]" />
    </section>
  );
};
