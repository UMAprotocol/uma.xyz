/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Contract, ethers } from "ethers";
import { getAbi, getAddress } from "@uma/contracts-node";

export function getProvider(chainId: number) {
  return new ethers.providers.JsonRpcBatchProvider(getNodeUrls()[chainId]);
}

export function getNodeUrls(): { [key: string]: string } {
  if (!process.env.NODE_URLS) throw Error("NODE_URLS env variable not set!");
  return JSON.parse(process.env.NODE_URLS);
}

export async function constructContract(contractName: any) {
  if (!process.env.CHAIN_ID) throw Error("CHAIN_ID env variable not set!");
  const chainId = Number(process.env.CHAIN_ID);
  console.log("getting", contractName, "on", chainId, await getAddress(contractName, chainId));
  const contractAddress =
    chainId == 5 ? "0xb3AED6A86B43De70dfe814C5ac549e722CF635D2" : await getAddress(contractName, chainId);
  return new Contract(contractAddress, getAbi(contractName), getProvider(chainId));
}
