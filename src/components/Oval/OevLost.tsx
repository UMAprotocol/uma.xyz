import { Divider } from "./Divider";
import { Countup } from "./Countup";
import { getOevLost } from "@/queries/getOevLost";

export const OevLost = async () => {
  const oevLost = await getOevLost();

  return (
    <section className="relative mx-auto mb-[150px] flex max-w-[828px] flex-col items-center gap-2 px-[--page-padding] text-center xl:mb-[200px]">
      <div
        style={{
          perspective: "500px",
        }}
      >
        <h3 className="text-md uppercase leading-6 tracking-widest text-white opacity-50">
          Total OEV lost by just AAVE and Compound
        </h3>
        <Countup oevLost={oevLost} />
      </div>
      <Divider className="mt-[100px] w-[120px] rotate-90 lg:mt-[150px] lg:w-[200px]" />
    </section>
  );
};
