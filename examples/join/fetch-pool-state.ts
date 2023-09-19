import BalancerAPI from "@/index";

const fetchPoolState = async () =>{
  const balancerApi = new BalancerAPI('http://localhost:4000/graphql', 1);
  const poolState = await balancerApi.joinData.fetchPoolState('0x5f1d6874cb1e7156e79a7563d2b61c6cbce03150000200000000000000000586');
  console.log(poolState);
}

fetchPoolState();