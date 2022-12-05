import { useQuery } from "@tanstack/react-query";
import { voteTickerKey } from "constant/queryKeys";
import getVoteTickerData from "queries/getVoteTickerData";

export default function useVoteTickerData() {
  const queryResult = useQuery([voteTickerKey], () => getVoteTickerData(), {
    refetchInterval: 1000 * 60,
    retry: 5,
  });

  return { data: queryResult.data, isLoading: queryResult.isLoading };
}
