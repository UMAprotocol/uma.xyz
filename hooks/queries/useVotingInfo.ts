import { useQuery } from "@tanstack/react-query";
import { defaultApy, voteTickerKey } from "constant";
import { getVotingInfo } from "queries";

export function useVotingInfo() {
  const queryResult = useQuery({
    queryKey: [voteTickerKey],
    queryFn: () => getVotingInfo(),
    refetchInterval: 1000 * 60,
    initialData: {
      apy: defaultApy,
      activeRequests: 0,
      phase: "commit",
    },
  });
  return queryResult;
}
