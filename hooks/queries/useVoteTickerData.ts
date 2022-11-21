import { useQuery } from "@tanstack/react-query";
import { voteTickerKey } from "constants/queryKeys";
import getVoteTickerData from "queries/getVoteTickerData";

export default function useVoteTickerData() {
  const queryResult = useQuery([voteTickerKey], () => getVoteTickerData());
  console.log("queryResult", queryResult);
  return queryResult;
}
