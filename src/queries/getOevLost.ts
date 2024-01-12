import { OevDataResponse } from "@/app/api/oev-data/route";
import { getApiRouteUrl } from "@/utils";

// should this be an env variable?
const ONE_DAY_SECONDS = 86_400;

export async function getOevLost() {
  const URI = getApiRouteUrl("/api/oev-data");
  const response = await fetch(URI, {
    next: {
      revalidate: ONE_DAY_SECONDS,
    },
  });
  const res = (await response.json()) as OevDataResponse;
  return res.oevLost;
}
