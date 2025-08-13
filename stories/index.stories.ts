import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/nftcdn-media-player.js';

const meta: Meta = {
  title: 'NftcdnMediaPlayer',
  component: 'nftcdn-media-player',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj;

export const IpfsImage: Story = {
  name: 'image/png (IPFS)',
  args: {
    src: 'ipfs://bafybeidnye5ohaqjliyriep2huapmgfgzuo7zlaeqe3rv6dxvu5yb46igm',
    name: 'SpaceBud #9930',
    ipfsGateway: 'https://ipfs.io',
  },
};

export const ArweaveImage: Story = {
  name: 'image/jpeg (Arweave)',
  args: {
    src: 'ar://RlFSFLk7rigcJScelZC7AWpibfzqSCGB2bq1eN-s21g',
    name: 'A Day at the Lake: Amoeba #2',
  },
};

export const DataUriWebPImage: Story = {
  name: 'image/webp (data URL)',
  args: {
    src: 'data:image/webp;base64,UklGRmIBAABXRUJQVlA4TFUBAAAvg8PgAGegKrIN6t4IngF8KyCZ1iqooaCRpOYF9CIDAWhALm66BSSgKADIiAh3ClmkktXTrgCb/wDA/x8HwgVXh1qrl7I5TyVGuoTFZ3qBQ9rWriiFFFJIIYUUUhiFFFJIYRR+sVvzfnw7ov8T0Pif//mf//mf//mf//mf//mf//n/G3kML6fmP/7jP/7jP/6rgozh4YYvYf7jP/7jP/7jv0rGGB4e1CXMf/zHf/zHf/xXyZjC/UPOf/zHf/zHf/xXq2jh7iHnP/7jP/7jP/6rN0zhdupr+FxzmP/4j//4j//4r1Zxy1Pz3W4vVf7jP/7jP/7jv/99fbgL92H+4z/+4z/+478ayS3nP/7jP/7jP/6rkbQ3If/xH//xH//x3/+vy6nX8BbmP/7jP/7jP/6rc2ynXsPbqfcw//Ef//Ef//FfJSO9hre7vYf5j//4j//4j//qDQA=',
    name: 'AdaIdiot #9986',
  },
};

export const DataUriSvgImage: Story = {
  name: 'image/svg (data URL)',
  args: {
    src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyODAiIGhlaWdodD0iNDUwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkZGRkZGIi8+PGNpcmNsZSBjeD0iMTQwIiBjeT0iMTQwIiByPSIxMjAiIGZpbGw9IiNGRjE0OTMiLz48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0iZm9udDo4MDAgMjRwdCBzYW5zLXNlcmlmIiB4PSIxNDAiIHk9IjQxMCI+Q2FyZGFub1RyZWVzPC90ZXh0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250OjgwMCAyNHB0IHNhbnMtc2VyaWYiIHg9IjE0MCIgeT0iNDQwIj4jMDQyMzwvdGV4dD48cGF0aCBmaWxsPSIjRkYwMEZGIiBkPSJNMTM0IDM4MHExMi00OSA2LTE1NS0yMS0xMDItMTA1LTM4IDIxLTIyIDQ2LTI5LTE1LTgtMjMtMzYgMTUgMzMgMzAgMzQgNDEgMiA1NiA2MiA4LTM5LTIyLTE0MSAxMSAyMyAxNiA0MiAxNi0zOCA5OC00MS05MSAxMC05NCA0NSAwIDMxIDEyIDc2IDIzLTM0IDk1LTQ3LTkxIDI0LTk0IDYwIDIgMTA4IDE5IDE2OHoiLz48L3N2Zz4K',
    name: 'CardanoTrees 0423',
  },
};

export const GifImage: Story = {
  name: 'image/gif (NFTCDN)',
  args: {
    src: 'https://asset1a39s8ugsy80gd0g3zt5tdy4n8nerspyccwd8au.cardano.nftcdn.io/image?tk=gxy3wANwfEc6EomYQBLsL5shUl-BrUYFO4bfH01dZmU',
    name: 'Satashi Naclaymoto - Clay Mates 0',
  },
};

export const IpfsHtml: Story = {
  name: 'text/html (IPFS)',
  args: {
    src: 'ipfs://QmTZ9g8rgMjcKp2357cJR4brgKTKQDWzbKsP2TAumKrfHy',
    type: 'text/html',
    name: 'PXL#1876',
  },
};

export const NftcdnHtml: Story = {
  name: 'text/html (NFTCDN)',
  args: {
    src: 'https://asset15ww77n3qdp64estz23px26z6quek25p82a4cje.cardano.nftcdn.io/files/0/?tk=wWu0ePP5vYSHcnFQvowu2aMpIN1MSBxRi_k-hA3batE',
    type: 'text/html',
    name: 'CardanoTrees 0423',
  },
};

export const GltfJson: Story = {
  name: 'model/gltf+json (NFTCDN)',
  args: {
    src: 'https://asset13repnu36tdvjmmqvj47r4ve0xyx0rr48kv2u2l.cardano.nftcdn.io/files/1/?tk=NBoxtRkYsqOxD0b8Feg4s4yrd4RShrY2axuDaTWvc04',
    type: 'model/gltf+json',
    name: 'infl₳D₳bles - Dizzy Sailing',
  },
};

export const GltfBinary: Story = {
  name: 'model/gltf-binary (NFTCDN)',
  args: {
    src: 'https://asset1dszryl629g5d8vxzz2wad3wjwuv5hqkajekd3x.cardano.nftcdn.io/files/0/?tk=9RDUTiJ-6uOaEnxrg5e44smGPVb2beJWp3uvuM1KyiU',
    type: 'model/gltf-binary',
    name: 'Knitties Sudo cNFTcon2021 #0099',
  },
};

export const Pdf: Story = {
  name: 'application/pdf (IPFS)',
  args: {
    src: 'ipfs://bafkreigr35rigmubdmv5u7vr47d2tmvhq3i245uvtmzuciyexepcvaargu',
    type: 'application/pdf',
    name: 'Cardano Constitution v2.0',
  },
};

export const Text: Story = {
  name: 'text/plain (IPFS)',
  args: {
    src: 'ipfs://QmSfJP86apVgZGYuawctKbasKg2G2bb7Zcm5m3MqKHsfEw',
    type: 'text/plain',
    name: 'Tao Te Ching – Verse 1',
  },
};

export const Wav: Story = {
  name: 'audio/wav (NFTCDN)',
  args: {
    src: 'https://asset1yzm65ncsv6kafcnlusxfx05wjr2edradpjyu97.cardano.nftcdn.io/files/3?tk=zkr5qig7C2VFKidFaA8e0t3-v7qKf0UAgNg6GjlpPLY',
    type: 'audio/wav',
    name: 'Frigid Optics - Ouroboros',
  },
};

export const Mp3: Story = {
  name: 'audio/mpeg (IPFS)',
  args: {
    src: 'ipfs://QmUPFUgg7zGWXfKEa5uEpg38QwsgjMuizXS4XkUkGV341H/1%20-%20run.mp3',
    type: 'audio/mpeg',
    name: 'Rain of Hearts - Run',
    autoplay: true,
  },
};

export const Flac: Story = {
  name: 'audio/x-flag (NFTCDN)',
  args: {
    src: 'https://asset1rqfpkpyfwe9xwlpuj56rh9gte56z3xjnte7xyl.cardano.nftcdn.io/files/4/?tk=U3FgweTMCB6Dnz8zmbOxVZrRCnekkaKdNMSkLkLLDEM',
    type: 'audio/mpeg',
    name: 'DJ Zero Action - Dreamskater',
  },
};

export const Mp4: Story = {
  name: 'video/mp4 (NFTCDN)',
  args: {
    src: 'https://asset12afcj56ez9qu9fsvev8jjl9gsa9gpfrpgr7pkm.cardano.nftcdn.io/files/0?tk=ljgemck3kF6SEVERI1j89Jn-eCiVZUIsPGqyt64_eIY',
    type: 'video/mp4',
    name: 'BlockOwls Nana',
    autoplay: false,
  },
};

export const Unknown: Story = {
  name: 'unknown/type',
  args: {
    src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'unknown/type',
    name: 'Unknown',
  },
};
