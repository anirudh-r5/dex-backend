import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const NftModule = buildModule('NftModule', (m) => {
  const market = m.contract('Marketplace');
  const nftContract = m.contract('NFT', [market]);

  return { market };
});

export default NftModule;
