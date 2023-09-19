import { Address } from "@/types";

export type PoolState = {
  id: Address;
  address: Address;
  type: string;
  version: string;
  tokens: {
    address: Address;
    decimals: number;
    index: number;
  };
}[];

