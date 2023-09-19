declare class SubgraphClient {
    subgraphUrl: string;
    chainId: number;
    constructor(subgraphUrl: string, chainId: number);
    fetch(operationName: string, query: any, variables: any): Promise<any>;
}

type Address = `0x${string}`;

type PoolState = {
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

declare class JoinData {
    private readonly subgraphClient;
    readonly poolStateQuery = "\n  query GetAllPools($id: String!){\n    poolGetPool(id:$id) {\n      id\n      address\n      name\n      type\n      version\n      ... on GqlPoolWeighted {\n        tokens {\n          ... on GqlPoolTokenBase {\n            address\n             decimals\n            index\n          }\n        }\n      }\n      ... on GqlPoolStable {\n        tokens {\n          ... on GqlPoolTokenBase {\n            address\n             decimals\n            index\n          }\n        }\n      }\n      ... on GqlPoolPhantomStable {\n        tokens {\n          ... on GqlPoolTokenBase {\n            address\n             decimals\n            index\n          }\n        }\n      }\n      ... on GqlPoolGyro {\n        tokens {\n          ... on GqlPoolTokenBase {\n            address\n             decimals\n            index\n          }\n        }\n      }\n      ... on GqlPoolLiquidityBootstrapping {\n        tokens {\n          ... on GqlPoolTokenBase {\n            address\n             decimals\n            index\n          }\n        }\n      }\n      ... on GqlPoolElement {\n        tokens {\n          ... on GqlPoolTokenBase {\n            address\n             decimals\n            index\n          }\n        }\n      }\n      ... on GqlPoolLiquidityBootstrapping {\n        tokens {\n          ... on GqlPoolTokenBase {\n            address\n             decimals\n            index\n          }\n        }\n      }\n    }\n}\n  ";
    constructor(subgraphClient: SubgraphClient);
    fetchPoolState(id: string): Promise<PoolState>;
}

declare class BalancerAPI {
    subgraphClient: SubgraphClient;
    joinData: JoinData;
    constructor(subgraphUrl: string, chainId: number);
}

export { BalancerAPI as default };
