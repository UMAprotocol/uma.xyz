import { Divider } from "./Divider";
import { Countup } from "./Countup";
import { OevDataResponse } from "@/app/api/oev-data/route";
import { getApiRouteUrl } from "@/utils";
import { headers } from "next/headers";

// should this be an env variable?
const ONE_DAY_SECONDS = 86_400;

export async function getOevLost() {
  const host = headers().get("host");
  const URI = getApiRouteUrl("/api/oev-data", host);

  const response = await fetch(URI, {
    next: {
      revalidate: ONE_DAY_SECONDS,
    },
  });
  const res = (await response.json()) as OevDataResponse;
  return res.oevLost;
}

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
