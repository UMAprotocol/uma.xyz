import { DuneClient } from "@cowprotocol/ts-dune-client";

// ====================================================== //
// ====================== CONSTANTS ===================== //
// ====================================================== //

export const API_KEY = process.env.DUNE_API_KEY;
export const Dune = API_KEY ? new DuneClient(API_KEY) : undefined;
export const ONE_DAY_SECONDS = 86_400;

// ====================================================== //
// ====================== QUERY IDS ===================== //
// ====================================================== //

export const OEV_LOST_QUERY_ID = 3373179;
export const OSNAP_TVS_QUERY_ID = 2944802;
export const ORACLE_TVS_QUERY_ID = 3113313;

// ====================================================== //
// ============ QUERY KEYS (FOR REVALIDATION) =========== //
// ====================================================== //

export const createDuneQueryKey = (queryId: number) => `dune-query-${queryId}`;

export const OEV_LOST_KEY = createDuneQueryKey(OEV_LOST_QUERY_ID);
export const OSNAP_TVS_KEY = createDuneQueryKey(OSNAP_TVS_QUERY_ID);
export const ORACLE_TVS_KEY = createDuneQueryKey(ORACLE_TVS_QUERY_ID);

export const duneActive = !!Dune;

export type OevLostData = {
  max_potential_revenue_usd: number;
};

export type OsnapTvsData = {
  amount_usd: number;
};

export type OracleTvsData = {
  tvs: number;
};
