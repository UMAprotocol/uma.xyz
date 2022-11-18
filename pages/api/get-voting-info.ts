// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { constructContract } from "./_common";

type Data = {
  name: string;
};

async function getVotingInfo() {
  const voting = await constructContract("VotingV2");
  console.log("GET");
  console.log(await voting.owner());

  const [activeRequests, cumulativeStake, emissionRate, phase] = await Promise.all([
    voting.getPendingRequests(),
    voting.cumulativeStake(),
    voting.emissionRate(),
    voting.getVotePhase(),
  ]);

  // 31,536,000 is the number of seconds in a year. mul by 1000 to get 100% with 1 decimal point.
  const apy = emissionRate.mul(31536000).mul(1000).div(cumulativeStake).div(10).toString();

  return {
    apy,
    activeRequests: activeRequests.length.toString(),
    phase: phase === 0 ? "Commit" : "Reveal",
  };
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  response.setHeader("Cache-Control", "max-age=0, s-maxage=43200"); // Cache for 12 hours, reset on re-deployment.

  try {
    const votingInfo = await getVotingInfo();
    response.status(200).send(votingInfo);
  } catch (e) {
    console.error(e);
    response.status(500).send({
      message: "Error in fetching voting information",
      error: e instanceof Error ? e.message : e,
    });
  }
}
