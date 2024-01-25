import { DuneClient } from "@cowprotocol/ts-dune-client";

// ====================================================== //
// ====================== CONSTANTS ===================== //
// ====================================================== //

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const API_KEY = process.env.DUNE_API_KEY!;
export const Dune = new DuneClient(API_KEY);
export const ONE_DAY_SECONDS = 86_400;

// ====================================================== //
// ====================== QUERY IDS ===================== //
// ====================================================== //

export const OEV_LOST_QUERY_ID = 3373179;
export const OSNAP_TVS_QUERY_ID = 12345; // TODO

// ====================================================== //
// ============ QUERY KEYS (FOR REVALIDATION) =========== //
// ====================================================== //

export const createDuneQueryKey = (queryId: number) => `dune-query-${queryId}`;

export const OEV_LOST_KEY = createDuneQueryKey(OEV_LOST_QUERY_ID);
export const TVS_KEY = createDuneQueryKey(OSNAP_TVS_QUERY_ID);
