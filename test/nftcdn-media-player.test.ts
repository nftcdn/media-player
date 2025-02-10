import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { NftcdnMediaPlayer } from '../src/NftcdnMediaPlayer.js';
import '../src/nftcdn-media-player.js';

describe('NftcdnMediaPlayer', () => {
  it('has a default src and type', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player></nftcdn-media-player>`,
    );

    expect(el.src).to.equal(
      'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22/%3E',
    );
    expect(el.type).to.equal('image/svg+xml');
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

  it('can override the alt via attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player alt="Description"></nftcdn-media-player>`,
    );

    expect(el.alt).to.equal('Description');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player></nftcdn-media-player>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
