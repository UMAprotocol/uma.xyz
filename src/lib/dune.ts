import { cache } from "react";
import {
  Dune,
  OEV_LOST_KEY,
  OEV_LOST_QUERY_ID,
  ORACLE_TVS_KEY,
  ORACLE_TVS_QUERY_ID,
  OSNAP_TVS_KEY,
  OSNAP_TVS_QUERY_ID,
  OevLostData,
  OracleTvsData,
  OsnapTvsData,
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
    console.log("dune update successful");
    const data = executionRes.result.rows[0] as TData;
    // update cache
    await kv.set(queryKey, data);
    console.log("redis update successful, new value: ");
    return data;
  } catch (error) {
    console.error(error);
    return (await kv.get(queryKey)) as TData;
  }
};

export const getOsnapTvs = cache(async () => {
  const newData = await dune<OsnapTvsData>(OSNAP_TVS_QUERY_ID, OSNAP_TVS_KEY);
  return newData.amount_usd;
});

export const getOevLost = cache(async () => {
  const newData = await dune<OevLostData>(OEV_LOST_QUERY_ID, OEV_LOST_KEY);
  return newData.max_potential_revenue_usd;
});

export const getOracleTvs = cache(async () => {
  const newData = await dune<OracleTvsData>(ORACLE_TVS_QUERY_ID, ORACLE_TVS_KEY);
  return newData.tvs;
});
