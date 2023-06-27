import { defaultApr, overrideApr } from "@/constant";
import { getVotingInfo } from "@/queries";
import { VotingInfo } from "@/types";
import useSWR from "swr";

export function useVotingInfo() {
  const fallbackData = {
    apy: overrideApr ?? defaultApr,
    activeRequests: 0,
    phase: "commit",
  } as VotingInfo;

  return useSWR("/api/get-voting-info", getVotingInfo, { fallbackData });
}
