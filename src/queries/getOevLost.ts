import { OevDataResponse } from "@/app/api/oev-data/route";

// should this be an env variable?
const ONE_DAY_SECONDS = 86_400;

export async function getOevLost() {
  const response = await fetch("/api/oev-data", {
    next: {
      revalidate: ONE_DAY_SECONDS,
    },
  });
  const res = (await response.json()) as OevDataResponse;
  return res.oevLost;
}
