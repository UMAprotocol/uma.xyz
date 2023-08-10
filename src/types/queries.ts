export type VotingInfo = {
  apr: string;
  activeRequests: number;
  phase: "commit" | "reveal";
};
