import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const API_KEY = process.env.DUNE_API_KEY!;

// should this be an env variable?
const ONE_DAY_SECONDS = 86_400;
const QUERY_ID = "1258228";

type ExecutionResponse =
  | {
      execution_id: string;
      state: "QUERY_STATE_PENDING";
    }
  | {
      execution_id: undefined;
      state: "QUERY_STATE_FAILED"; // not sure
    };

type DuneResponse = {
  oevLost: number;
};

const headers = new Headers({
  "x-dune-api-key": API_KEY,
});

export async function GET() {
  try {
    const executionRes = await fetch(`https://api.dune.com/api/v1/query/${QUERY_ID}`, {
      method: "POST",
      headers,
      next: {
        revalidate: ONE_DAY_SECONDS,
      },
    });
    // what if the execution request fails? how do we return stale resultsData? Redis?
    if (!executionRes.ok) {
      throw new Error("Network error fetching Oev data");
    }
    const executionData = (await executionRes.json()) as ExecutionResponse;
    if (executionData.state === "QUERY_STATE_FAILED") {
      throw new Error("Failed to execute query");
    }
    const executionId = executionData.execution_id;
    const resultsRes = await fetch(`https://api.dune.com/api/v1/execution/${executionId}/results`, {
      method: "GET",
      headers,
    });

    const resultsData = (await resultsRes.json()) as DuneResponse;
    return NextResponse.json({
      status: 200,
      body: { oevLost: resultsData.oevLost },
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
