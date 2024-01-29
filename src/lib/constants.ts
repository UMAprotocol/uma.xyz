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

// ====================================================== //
// ============ QUERY KEYS (FOR REVALIDATION) =========== //
// ====================================================== //

export const createDuneQueryKey = (queryId: number) => `dune-query-${queryId}`;

export const OEV_LOST_KEY = createDuneQueryKey(OEV_LOST_QUERY_ID);
export const TVS_KEY = createDuneQueryKey(OSNAP_TVS_QUERY_ID);

// avoid doing expensive queries in dev/preview
export const duneActive = process.env.VERCEL_ENV === "production" && Dune !== undefined;
