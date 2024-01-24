import { NextResponse } from "next/server";
import { DuneClient } from "@cowprotocol/ts-dune-client";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const API_KEY = process.env.DUNE_API_KEY!;
const Dune = new DuneClient(API_KEY);

const QUERY_ID = 3373179;

export async function GET() {
  try {
    const executionRes = await Dune.refresh(QUERY_ID);
    console.log(executionRes);

    if (!executionRes.result) {
      throw new Error("Failed to execute query");
    }

    const oevLost = (executionRes.result.rows[0] as { max_potential_revenue_usd: number }).max_potential_revenue_usd;
    // cache successful response
    return NextResponse.json({
      status: 200,
      oevLost, // find where value lives
    });
  } catch (e) {
    console.error(e);
    // return stale server cache
    return NextResponse.json({
      status: 500,
      body: `Failed to fetch OEV data from Dune`,
    });
  }
}
