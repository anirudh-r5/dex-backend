import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const NFTModule = buildModule('NFTModule', (m) => {
  const nftMkt = m.contract('Marketplace');
  const nft = m.contract('NFT', [nftMkt, 'SuperDEX', 'SDX']);

  return { nft };
});

export default NFTModule;
