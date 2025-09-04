import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { NftcdnMediaPlayer } from '../src/NftcdnMediaPlayer.js';
import '../src/nftcdn-media-player.js';

describe('NftcdnMediaPlayer', () => {
  it('attributes are undefined by default and an error reported', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player></nftcdn-media-player>`,
    );

    expect(el.src).to.equal(undefined);
    expect(el.type).to.equal(undefined);
    expect(el.name).to.equal(undefined);
    await expect(el).shadowDom.to.equal(
      '<p>Error: nftcdn-media-player requires a "src" attribute.</p>',
    );
  });

  // Properties
  it('can set the media URL via attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://bafybeidnye5ohaqjliyriep2huapmgfgzuo7zlaeqe3rv6dxvu5yb46igm"
      ></nftcdn-media-player>`,
    );

    expect(el.src).to.equal(
      'ipfs://bafybeidnye5ohaqjliyriep2huapmgfgzuo7zlaeqe3rv6dxvu5yb46igm',
    );
  });

  it('can set the media/mime type via attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player type="image/png"></nftcdn-media-player>`,
    );

    expect(el.type).to.equal('image/png');
  });

  it('can set the name via attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player name="test"></nftcdn-media-player>`,
    );

    expect(el.name).to.equal('test');
  });

  it('can set autoplay attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player autoplay></nftcdn-media-player>`,
    );

    expect(el.autoplay).to.equal(true);
  });

  // IPFS
  it('supports IPFS URLs', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://QmWmHHhb2ts8vsRqoFyg3unVKK9j1cmQLmVpEtsAGFDmLY"
      ></nftcdn-media-player>`,
    );

    expect(el).shadowDom.to.equal(`
      <img src="https://ipfs.io/ipfs/QmWmHHhb2ts8vsRqoFyg3unVKK9j1cmQLmVpEtsAGFDmLY" />
    `);
  });

  it('can override the IPFS gateway via attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://QmWmHHhb2ts8vsRqoFyg3unVKK9j1cmQLmVpEtsAGFDmLY"
        ipfsgateway="https://ipfs.blockfrost.dev"
      ></nftcdn-media-player>`,
    );

    expect(el.ipfsGateway).to.equal('https://ipfs.blockfrost.dev');
    expect(el).shadowDom.to.equal(`
      <img src="https://ipfs.blockfrost.dev/ipfs/QmWmHHhb2ts8vsRqoFyg3unVKK9j1cmQLmVpEtsAGFDmLY" />
    `);
  });

  // Arweave
  it('supports Arweave URLs', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ar://0kN8jQ2ZmJsaJSnsYy6vFGfg5lLRdpoJRLiToTazypk"
      ></nftcdn-media-player>`,
    );

    expect(el).shadowDom.to.equal(`
      <img src="https://arweave.net/0kN8jQ2ZmJsaJSnsYy6vFGfg5lLRdpoJRLiToTazypk" />
    `);
  });

  it('can override the Arweave gateway via attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        argateway="https://metapaths.ar.io/"
      ></nftcdn-media-player>`,
    );

    expect(el.arGateway).to.equal('https://metapaths.ar.io/');
  });

  // Images
  it('renders images', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      ></nftcdn-media-player>`,
    );
    await expect(el).shadowDom.to.equal(
      '<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" />',
    );
  });

  it('passes the a11y audit with images', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        name="Tiny GIF"
      ></nftcdn-media-player>`,
    );
    await expect(el).shadowDom.to.be.accessible();
  });

  // HTML documents
  it('renders HTML documents', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="data:text/html,%3Chtml%3EHello%3C%2Fhtml%3E"
        type="text/html"
      ></nftcdn-media-player>`,
    );
    expect(el).shadowDom.to.equal(
      `<iframe
          src="data:text/html,%3Chtml%3EHello%3C%2Fhtml%3E"
          sandbox="allow-scripts allow-downloads allow-same-origin"
          allow="geolocation;magnetometer;gyroscope;accelerometer;clipboard-write"
      ></iframe>`,
    );
  });

  it('passes the a11y audit with HTML documents', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="data:text/html,%3Chtml%3EHello%3C%2Fhtml%3E"
        type="text/html"
        name="Hello"
      ></nftcdn-media-player>`,
    );
    await expect(el).shadowDom.to.be.accessible();
  });

  // glTF 3D models
  it('renders glTF 3D models', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://QmQHcmcHvdXnWY3eAM3EkxcB8YoayAMrhx7XEhC2DdgBdV"
        type="model/gltf-binary"
      ></nftcdn-media-player>`,
    );
    expect(el).shadowDom.to.equal(
      `<model-viewer
          ar
          auto-rotate
          camera-controls
          ar-status="not-presenting"
          ar-modes="webxr scene-viewer quick-look"
          autoplay
      ></model-viewer>`,
      {
        ignoreAttributes: ['src'],
      },
    );
  });

  it('passes the a11y audit with glTF 3D models', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://QmQHcmcHvdXnWY3eAM3EkxcB8YoayAMrhx7XEhC2DdgBdV"
        type="model/gltf-binary"
      ></nftcdn-media-player>`,
    );
    await expect(el).shadowDom.to.be.accessible();
  });

  // PDF documents
  it('renders PDF documents', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://bafkreigr35rigmubdmv5u7vr47d2tmvhq3i245uvtmzuciyexepcvaargu"
        type="application/pdf"
      ></nftcdn-media-player>`,
    );
    expect(el).shadowDom.to.equal(
      `<object
          data="https://ipfs.io/ipfs/bafkreigr35rigmubdmv5u7vr47d2tmvhq3i245uvtmzuciyexepcvaargu"
          type="application/pdf"
      />`,
    );
  });

  it('passes the a11y audit with PDF documents', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://bafkreigr35rigmubdmv5u7vr47d2tmvhq3i245uvtmzuciyexepcvaargu"
        type="application/pdf"
        name="Cardano Constitution v2.0"
      ></nftcdn-media-player>`,
    );
    await expect(el).shadowDom.to.be.accessible();
  });

  // Text documents
  it('renders plain text documents', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="data:text/html,Hello World"
        type="text/plain"
      ></nftcdn-media-player>`,
    );
    expect(el).shadowDom.to.equal(
      `<object
          data="data:text/html,Hello World"
          type="text/plain"
          />`,
    );
  });

  it('passes the a11y audit with plain text documents', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="data:text/html,Hello World"
        type="text/plain"
        name="Hello World"
      ></nftcdn-media-player>`,
    );
    await expect(el).shadowDom.to.be.accessible();
  });

  // Audio files
  it('renders audio files', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://QmUPFUgg7zGWXfKEa5uEpg38QwsgjMuizXS4XkUkGV341H/1%20-%20run.mp3"
        type="audio/mpeg"
      ></nftcdn-media-player>`,
    );
    expect(el).shadowDom.to.equal(
      `<audio
          src="https://ipfs.io/ipfs/QmUPFUgg7zGWXfKEa5uEpg38QwsgjMuizXS4XkUkGV341H/1%20-%20run.mp3"
          controls
          preload="none"
      />`,
    );
  });

  it('passes the a11y audit with audio files', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://QmUPFUgg7zGWXfKEa5uEpg38QwsgjMuizXS4XkUkGV341H/1%20-%20run.mp3"
        type="audio/mpeg"
      ></nftcdn-media-player>`,
    );
    await expect(el).shadowDom.to.be.accessible();
  });

  // Video files
  it('renders video files', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://QmdzdgKBqpE7sFrWPGmLyL8yD1oo9BHbSafHYSnfaj2C5B"
        type="video/mp4"
      ></nftcdn-media-player>`,
    );
    expect(el).shadowDom.to.equal(
      `<video
          src="https://ipfs.io/ipfs/QmdzdgKBqpE7sFrWPGmLyL8yD1oo9BHbSafHYSnfaj2C5B"
          controls
          loop
          playsinline
      />`,
    );
  });

  it('passes the a11y audit with video files', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://QmdzdgKBqpE7sFrWPGmLyL8yD1oo9BHbSafHYSnfaj2C5B"
        type="video/mp4"
      ></nftcdn-media-player>`,
    );
    await expect(el).shadowDom.to.be.accessible();
  });

  // Unknown media
  it('renders unknown media as links', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="data:unknown/type;base64,"
        type="unknown/type"
        name="unknown"
      ></nftcdn-media-player>`,
    );
    expect(el).shadowDom.to.equal(
      '<a href="data:unknown/type;base64,">unknown</a>',
    );
  });

  it('renders unknown and unnamed media as links', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="data:unknown/type;base64,"
        type="unknown/type"
      ></nftcdn-media-player>`,
    );
    expect(el).shadowDom.to.equal('<a href="data:unknown/type;base64,"></a>', {
      ignoreChildren: ['a'],
    });
  });
});
