// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import { parseEther } from 'ethers';

const USDTVendor = buildModule('USDTVendorModule', (m) => {
  const token = m.contract('Token', ['Tether', 'USDT'], {
    id: 'Token1',
  });
  const usdtVending = m.contract('TokenVendor', [token, 3673]);
  m.call(token, 'transfer', [usdtVending, parseEther('1000')]);

  return { usdtVending };
});

export default USDTVendor;
