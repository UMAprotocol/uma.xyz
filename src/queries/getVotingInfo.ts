import { VotingInfo } from "@/types";

export async function getVotingInfo() {
  const response = await fetch("/api/get-voting-info");
  return (await response.json()) as VotingInfo;
}
