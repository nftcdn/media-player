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
  args: {
    src: 'ipfs://bafybeidnye5ohaqjliyriep2huapmgfgzuo7zlaeqe3rv6dxvu5yb46igm',
    name: 'SpaceBud #9930',
  },
};

export const ArweaveImage: Story = {
  args: {
    src: 'ar://0kN8jQ2ZmJsaJSnsYy6vFGfg5lLRdpoJRLiToTazypk',
    name: 'SpaceBud #99',
  },
};

export const Html: Story = {
  args: {
    src: 'ipfs://QmTZ9g8rgMjcKp2357cJR4brgKTKQDWzbKsP2TAumKrfHy',
    type: 'text/html',
    name: 'PXL',
  },
};

export const Gltf: Story = {
  args: {
    src: 'ipfs://QmQHcmcHvdXnWY3eAM3EkxcB8YoayAMrhx7XEhC2DdgBdV',
    type: 'model/gltf-binary',
    name: 'Knitties',
  },
};
