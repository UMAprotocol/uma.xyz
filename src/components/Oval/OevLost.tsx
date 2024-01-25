import { Divider } from "./Divider";
import { Ellipse } from "./Ellipsis";
import { Countup } from "./Countup";
import { getOevLost } from "@/lib/dune";
import { isDevEnvironment } from "@/utils";
import { oevLostFallback } from "@/constant";

export const OevLost = async () => {
  // avoid doing expensive query in dev
  const oevLost = isDevEnvironment ? parseInt(oevLostFallback) : (await getOevLost()).max_potential_revenue_usd;

  return (
    <section className="relative mx-auto mb-[150px] flex max-w-[828px] flex-col items-center gap-2 px-[--page-padding] text-center xl:mb-[200px]">
      <Ellipse className="right-[-20%]" />
      <Countup number={oevLost} />
      <Divider className="mt-[100px] w-[120px] rotate-90 lg:mt-[150px] lg:w-[200px]" />
    </section>
  );
};
