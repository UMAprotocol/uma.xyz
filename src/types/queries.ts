export interface VotingInfo {
  apr: string;
  activeRequests: number;
  phase: "commit" | "reveal";
}
