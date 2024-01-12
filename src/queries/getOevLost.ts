import { OevDataResponse } from "@/app/api/oev-data/route";

export async function getOevLost() {
  const response = await fetch("/api/oev-data");
  const res = (await response.json()) as OevDataResponse;
  return res.oevLost;
}
