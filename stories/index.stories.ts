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
    ipfsGateway: 'https://ipfs.io',
  },
};

export const ArweaveImage: Story = {
  name: 'JPEG Image on Arweave',
  args: {
    src: 'ar://RlFSFLk7rigcJScelZC7AWpibfzqSCGB2bq1eN-s21g',
    name: 'A Day at the Lake: Amoeba #2',
  },
};

export const DataUriWebPImage: Story = {
  name: 'WebP Image Data URL',
  args: {
    src: 'data:image/webp;base64,UklGRmIBAABXRUJQVlA4TFUBAAAvg8PgAGegKrIN6t4IngF8KyCZ1iqooaCRpOYF9CIDAWhALm66BSSgKADIiAh3ClmkktXTrgCb/wDA/x8HwgVXh1qrl7I5TyVGuoTFZ3qBQ9rWriiFFFJIIYUUUhiFFFJIYRR+sVvzfnw7ov8T0Pif//mf//mf//mf//mf//mf//n/G3kML6fmP/7jP/7jP/6rgozh4YYvYf7jP/7jP/7jv0rGGB4e1CXMf/zHf/zHf/xXyZjC/UPOf/zHf/zHf/xXq2jh7iHnP/7jP/7jP/6rN0zhdupr+FxzmP/4j//4j//4r1Zxy1Pz3W4vVf7jP/7jP/7jv/99fbgL92H+4z/+4z/+478ayS3nP/7jP/7jP/6rkbQ3If/xH//xH//x3/+vy6nX8BbmP/7jP/7jP/6rc2ynXsPbqfcw//Ef//Ef//FfJSO9hre7vYf5j//4j//4j//qDQA=',
    name: 'AdaIdiot #9986',
  },
};

export const DataUriSvgImage: Story = {
  name: 'SVG Image Data URL',
  args: {
    src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyODAiIGhlaWdodD0iNDUwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkZGRkZGIi8+PGNpcmNsZSBjeD0iMTQwIiBjeT0iMTQwIiByPSIxMjAiIGZpbGw9IiNGRjE0OTMiLz48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0iZm9udDo4MDAgMjRwdCBzYW5zLXNlcmlmIiB4PSIxNDAiIHk9IjQxMCI+Q2FyZGFub1RyZWVzPC90ZXh0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250OjgwMCAyNHB0IHNhbnMtc2VyaWYiIHg9IjE0MCIgeT0iNDQwIj4jMDQyMzwvdGV4dD48cGF0aCBmaWxsPSIjRkYwMEZGIiBkPSJNMTM0IDM4MHExMi00OSA2LTE1NS0yMS0xMDItMTA1LTM4IDIxLTIyIDQ2LTI5LTE1LTgtMjMtMzYgMTUgMzMgMzAgMzQgNDEgMiA1NiA2MiA4LTM5LTIyLTE0MSAxMSAyMyAxNiA0MiAxNi0zOCA5OC00MS05MSAxMC05NCA0NSAwIDMxIDEyIDc2IDIzLTM0IDk1LTQ3LTkxIDI0LTk0IDYwIDIgMTA4IDE5IDE2OHoiLz48L3N2Zz4K',
    name: 'CardanoTrees 0423',
  },
};

export const GifImage: Story = {
  name: 'GIF Image with NFTCDN',
  args: {
    src: 'https://asset1a39s8ugsy80gd0g3zt5tdy4n8nerspyccwd8au.cardano.nftcdn.io/image?tk=gxy3wANwfEc6EomYQBLsL5shUl-BrUYFO4bfH01dZmU',
    name: 'Satashi Naclaymoto - Clay Mates 0',
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
    src: 'https://asset1dszryl629g5d8vxzz2wad3wjwuv5hqkajekd3x.cardano.nftcdn.io/files/0/?tk=9RDUTiJ-6uOaEnxrg5e44smGPVb2beJWp3uvuM1KyiU',
    type: 'model/gltf-binary',
    name: 'Knitties Sudo cNFTcon2021 #0099',
  },
};
