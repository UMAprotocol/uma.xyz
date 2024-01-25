import { unstable_cache } from "next/cache";
import { Dune, OEV_LOST_KEY, OEV_LOST_QUERY_ID, ONE_DAY_SECONDS } from "./constants";

const dune = async <TData>(queryId: number): Promise<TData> => {
  "use server";
  const executionRes = await Dune.refresh(queryId);
  if (!executionRes.result) {
    throw new Error("Failed to execute query");
  }

  const data = executionRes.result.rows[0] as TData;
  return data;
};

export const getOevLost = unstable_cache(
  () => dune<{ max_potential_revenue_usd: number }>(OEV_LOST_QUERY_ID),
  [OEV_LOST_KEY],
  {
    tags: [OEV_LOST_KEY],
    revalidate: ONE_DAY_SECONDS,
  },
);
