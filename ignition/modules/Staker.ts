// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const StakeModule = buildModule('StakeModule', (m) => {
  const stakeContract = m.contract('StakeExecContract');
  const staker = m.contract('Staker', [stakeContract]);

  return { staker };
});

export default StakeModule;
