/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAbi, getAddress, VotingV2Ethers } from "@uma/contracts-node";
import { Contract, ethers } from "ethers";

export function getProvider(chainId: number) {
  return new ethers.providers.JsonRpcBatchProvider(getNodeUrls()[chainId]);
}

export function getNodeUrls(): Record<string, string> {
  if (!process.env.NODE_URLS) throw Error("NODE_URLS env variable not set!");
  return JSON.parse(process.env.NODE_URLS);
}

export async function constructVotingContract() {
  const contractName = "VotingV2";
  const chainId = 1;
  const contractAddress = await getAddress(contractName, chainId);

  if (!contractAddress) throw Error("VOTING_CONTRACT_ADDRESS env variable not set!");

  return new Contract(contractAddress, getAbi(contractName), getProvider(chainId)) as VotingV2Ethers;
}
