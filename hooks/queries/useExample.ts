import { useQuery } from "@tanstack/react-query";
import { exampleKey } from "constants/queryKeys";
import { getExample } from "queries/example";

export function useExample() {
  const queryResult = useQuery([exampleKey], () => getExample());
  return queryResult;
}
