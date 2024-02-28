import { cache } from "react";
import { Dune, OEV_LOST_QUERY_ID, OSNAP_TVS_QUERY_ID, OevLostData, OsnapTvsData } from "./constants";

const dune = async <TData>(queryId: number): Promise<TData> => {
  if (!Dune) {
    throw new Error("No API key provided for Dune");
  }
  const executionRes = await Dune.refresh(queryId);
  if (!executionRes.result) {
    throw new Error("Failed to execute query");
  }

  const data = executionRes.result.rows[0] as TData;
  return data;
};

export const getOevLost = cache(async () => {
  const newData = await dune<OevLostData>(OEV_LOST_QUERY_ID);
  return newData;
});

export const getOsnapTvs = cache(async () => {
  const newData = await dune<OsnapTvsData>(OSNAP_TVS_QUERY_ID);
  return newData;
});
