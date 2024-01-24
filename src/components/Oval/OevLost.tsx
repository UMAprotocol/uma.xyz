import { Divider } from "./Divider";
import { Ellipse } from "./Ellipsis";
import { headers } from "next/headers";
import { getApiRouteUrl } from "@/utils";
import { OevDataResponse } from "@/app/api/oev-data/utils";
import { Countup } from "./Countup";

const ONE_DAY_SECONDS = 86_400;

export async function getOevLost() {
  if (process.env.NODE_ENV !== "production") {
    return 135712272;
  }
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
  console.log(oevLost);

  return (
    <section className="relative mx-auto mb-[150px] flex max-w-[828px] flex-col items-center gap-2 px-[--page-padding] text-center xl:mb-[200px]">
      <Ellipse className="right-[-20%]" />
      <Countup number={oevLost} />
      <Divider className="mt-[100px] w-[120px] rotate-90 lg:mt-[150px] lg:w-[200px]" />
    </section>
  );
};
