// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import { parseEther } from 'ethers';

const USDCVendor = buildModule('USDCVendorModule', (m) => {
  const token = m.contract('Token', ['USD Coin', 'USDC'], {
    id: 'Token2',
  });
  const usdcVending = m.contract('USDCVendor', [token]);
  m.call(token, 'transfer', [usdcVending, parseEther('1000')]);

  return { usdcVending };
});

export default USDCVendor;
