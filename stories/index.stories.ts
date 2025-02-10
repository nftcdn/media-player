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

export const Image: Story = {
  args: {
    src: 'ipfs://bafybeidnye5ohaqjliyriep2huapmgfgzuo7zlaeqe3rv6dxvu5yb46igm',
    alt: 'SpaceBud',
  },
};

export const Html: Story = {
  args: {
    src: 'ipfs://QmTZ9g8rgMjcKp2357cJR4brgKTKQDWzbKsP2TAumKrfHy',
    type: 'text/html',
    alt: 'PXLz',
  },
};

export const Gltf: Story = {
  args: {
    src: 'ipfs://QmQHcmcHvdXnWY3eAM3EkxcB8YoayAMrhx7XEhC2DdgBdV',
    type: 'model/gltf-binary',
  },
};
