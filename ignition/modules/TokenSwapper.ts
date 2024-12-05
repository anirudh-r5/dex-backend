// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const SwapModule = buildModule('TokenSwapModule', (m) => {
  const token1 = m.contract('Token', ['Tether', 'USDT'], { id: 'Token1' });
  const token2 = m.contract('Token', ['USD Coin', 'USDC'], { id: 'Token2' });
  const tokenSwap = m.contract('TokenSwap', [token1, token2]);

  return { tokenSwap };
});

export default SwapModule;
