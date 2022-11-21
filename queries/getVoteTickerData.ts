import axios from "axios";

export interface VoteTickerData {
  apy: string;
  activeRequests: string;
  phase: "Commit" | "Reveal";
}

export default async function getVoteTickerData() {
  const { data } = await axios.get("/api/get-voting-info");
  return data;
}
