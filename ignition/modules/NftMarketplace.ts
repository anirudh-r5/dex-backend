import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const NftModule = buildModule('NftModule', (m) => {
  const nftContract = m.contract('BasicNft');
  const market = m.contract('NftMarketplace');
  m.call(nftContract, 'mintNft', ['0'], { id: 'a1' });
  m.call(nftContract, 'mintNft', ['1'], { id: 'a2' });
  m.call(nftContract, 'mintNft', ['2'], { id: 'a3' });
  return { market };
});

export default NftModule;
