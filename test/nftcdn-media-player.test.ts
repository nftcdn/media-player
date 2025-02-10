import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { NftcdnMediaPlayer } from '../src/NftcdnMediaPlayer.js';
import '../src/nftcdn-media-player.js';

describe('NftcdnMediaPlayer', () => {
  it('attributes are undefined by default', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player></nftcdn-media-player>`,
    );

    expect(el.src).to.equal(undefined);
    expect(el.type).to.equal(undefined);
    expect(el.name).to.equal(undefined);
  });

  it('can override the src via attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        src="ipfs://bafybeidnye5ohaqjliyriep2huapmgfgzuo7zlaeqe3rv6dxvu5yb46igm"
      ></nftcdn-media-player>`,
    );

    expect(el.src).to.equal(
      'ipfs://bafybeidnye5ohaqjliyriep2huapmgfgzuo7zlaeqe3rv6dxvu5yb46igm',
    );
  });

  it('can override the type via attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player type="image/png"></nftcdn-media-player>`,
    );

    expect(el.type).to.equal('image/png');
  });

  it('can override the name via attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player name="test"></nftcdn-media-player>`,
    );

    expect(el.name).to.equal('test');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player></nftcdn-media-player>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
