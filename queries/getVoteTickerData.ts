export interface VoteTickerData {
  apy: string;
  activeRequests: string;
  phase: "Commit" | "Reveal";
}

export default async function getVoteTickerData() {
  const response = await fetch("/api/get-voting-info");
  return (await response.json()) as VoteTickerData;
}
