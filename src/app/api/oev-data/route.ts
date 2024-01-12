import { NextResponse } from "next/server";
import { DuneClient } from "@cowprotocol/ts-dune-client";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const API_KEY = process.env.DUNE_API_KEY!;
const Dune = new DuneClient(API_KEY);

const QUERY_ID = 1258228;

export async function GET() {
  try {
    const executionRes = await Dune.refresh(QUERY_ID);

    if (!executionRes.result) {
      throw new Error("Failed to execute query");
    }
    return NextResponse.json({
      status: 200,
      body: { oevLost: executionRes.result.rows[0] }, // find where value lives
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      status: 500,
      body: `Failed to fetch OEV data from Dune`,
    });
  }
}

export type OevDataResponse = {
  oevLost: number;
};
