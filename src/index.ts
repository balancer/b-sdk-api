import { JoinData } from "./modules/join";
import { SubgraphClient } from "@/client";

export default class BalancerAPI {
  
  subgraphClient: SubgraphClient;
  joinData: JoinData;
  
  
  constructor(subgraphUrl: string, chainId: number){
    this.subgraphClient = new SubgraphClient(subgraphUrl, chainId);
    this.joinData = new JoinData(this.subgraphClient);
  }
  
  
}