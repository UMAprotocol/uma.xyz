import { cache } from "react";
import {
  Dune,
  OEV_LOST_KEY,
  OEV_LOST_QUERY_ID,
  OSNAP_TVS_QUERY_ID,
  OevLostData,
  OsnapTvsData,
  TVS_KEY,
} from "./constants";
import { kv } from "@vercel/kv";

export const dune = async <TData>(queryId: number, queryKey: string): Promise<TData> => {
  try {
    if (!Dune) {
      throw new Error("No API key provided for Dune");
    }
    const executionRes = await Dune.refresh(queryId);
    if (!executionRes.result) {
      throw new Error("Failed to execute query");
    }
    const data = executionRes.result.rows[0] as TData;
    // update cache
    await kv.set(queryKey, data);
    return data;
  } catch (error) {
    // TODO: implement log drain for better debugging
    return (await kv.get(queryKey)) as TData;
  }
};

export const getOsnapTvs = cache(async () => {
  const newData = await dune<OsnapTvsData>(OSNAP_TVS_QUERY_ID, TVS_KEY);
  return newData;
});

export const getOevLost = cache(async () => {
  const newData = await dune<OevLostData>(OEV_LOST_QUERY_ID, OEV_LOST_KEY);
  return newData;
});
