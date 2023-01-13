import { defaultApy } from "constant";
import { getVotingInfo } from "queries";
import useSWR from "swr";

export function useVotingInfo() {
  const fallbackData = {
    apy: defaultApy,
    activeRequests: 0,
    phase: "commit",
  };

  return useSWR("/api/get-voting-info", getVotingInfo, { fallbackData });
}
