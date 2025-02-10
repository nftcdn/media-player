import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/nftcdn-media-player.js';

const meta: Meta = {
  title: 'NftcdnMediaPlayer',
  component: 'nftcdn-media-player',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj;

export const IpfsImage: Story = {
  name: 'PNG Image on IPFS',
  args: {
    src: 'ipfs://bafybeidnye5ohaqjliyriep2huapmgfgzuo7zlaeqe3rv6dxvu5yb46igm',
    name: 'SpaceBud #9930',
  },
};

export const ArweaveImage: Story = {
  name: 'PNG Image on Arweave',
  args: {
    src: 'ar://0kN8jQ2ZmJsaJSnsYy6vFGfg5lLRdpoJRLiToTazypk',
    name: 'SpaceBud #99',
  },
};

export const DataUriImage: Story = {
  name: 'WebP Image Data URL',
  args: {
    src: 'data:image/webp;base64,UklGRmIBAABXRUJQVlA4TFUBAAAvg8PgAGegKrIN6t4IngF8KyCZ1iqooaCRpOYF9CIDAWhALm66BSSgKADIiAh3ClmkktXTrgCb/wDA/x8HwgVXh1qrl7I5TyVGuoTFZ3qBQ9rWriiFFFJIIYUUUhiFFFJIYRR+sVvzfnw7ov8T0Pif//mf//mf//mf//mf//mf//n/G3kML6fmP/7jP/7jP/6rgozh4YYvYf7jP/7jP/7jv0rGGB4e1CXMf/zHf/zHf/xXyZjC/UPOf/zHf/zHf/xXq2jh7iHnP/7jP/7jP/6rN0zhdupr+FxzmP/4j//4j//4r1Zxy1Pz3W4vVf7jP/7jP/7jv/99fbgL92H+4z/+4z/+478ayS3nP/7jP/7jP/6rkbQ3If/xH//xH//x3/+vy6nX8BbmP/7jP/7jP/6rc2ynXsPbqfcw//Ef//Ef//FfJSO9hre7vYf5j//4j//4j//qDQA=',
    name: 'AdaIdiot #9986',
  },
};

export const Html: Story = {
  name: 'HTML + Javascript',
  args: {
    src: 'ipfs://QmTZ9g8rgMjcKp2357cJR4brgKTKQDWzbKsP2TAumKrfHy',
    type: 'text/html',
    name: 'PXL#1876',
  },
};

export const Gltf: Story = {
  name: 'glTF 3D Model',
  args: {
    src: 'ipfs://QmQHcmcHvdXnWY3eAM3EkxcB8YoayAMrhx7XEhC2DdgBdV',
    type: 'model/gltf-binary',
    name: 'Knitties Sudo cNFTcon2021 #0099',
  },
};
