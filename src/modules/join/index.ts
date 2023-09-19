import { SubgraphClient } from '@/client';
import { PoolState } from '@/modules/join/types';

export class JoinData {
  readonly poolStateQuery = `query GetPool($id: String!){
    poolGetPool(id:$id) {
      id
      address
      name
      type
      version
      ... on GqlPoolWeighted {
        tokens {
          ... on GqlPoolTokenBase {
            address
             decimals
            index
          }
        }
      }
      ... on GqlPoolStable {
        tokens {
          ... on GqlPoolTokenBase {
            address
             decimals
            index
          }
        }
      }
      ... on GqlPoolPhantomStable {
        tokens {
          ... on GqlPoolTokenBase {
            address
             decimals
            index
          }
        }
      }
      ... on GqlPoolGyro {
        tokens {
          ... on GqlPoolTokenBase {
            address
             decimals
            index
          }
        }
      }
      ... on GqlPoolLiquidityBootstrapping {
        tokens {
          ... on GqlPoolTokenBase {
            address
             decimals
            index
          }
        }
      }
      ... on GqlPoolElement {
        tokens {
          ... on GqlPoolTokenBase {
            address
             decimals
            index
          }
        }
      }
      ... on GqlPoolLiquidityBootstrapping {
        tokens {
          ... on GqlPoolTokenBase {
            address
             decimals
            index
          }
        }
      }
    }
}`;

  constructor(private readonly subgraphClient: SubgraphClient) {}

  async fetchPoolState(id: string): Promise<PoolState> {
    return await this.subgraphClient.fetch('GetPool', this.poolStateQuery, {
      id,
    });
  }
}
