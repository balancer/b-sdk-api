import axios from 'axios';

export class SubgraphClient {
  subgraphUrl: string;
  chainId: number;
  constructor(subgraphUrl: string, chainId: number) {
    this.subgraphUrl = subgraphUrl;
    this.chainId = chainId;
  }

  async fetch(operationName: string, query: any, variables: any) {
    const requestQuery = {
      operationName,
      query,
      variables,
    };
    const response = await axios({
      url: this.subgraphUrl,
      method: 'post',
      data: requestQuery,
      headers: { 'Content-Type': 'application/json', ChainId: this.chainId },
    });
    return response.data;
  }
}
