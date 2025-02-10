import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { NftcdnMediaPlayer } from '../src/NftcdnMediaPlayer.js';
import '../src/nftcdn-media-player.js';

describe('NftcdnMediaPlayer', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player></nftcdn-media-player>`,
    );

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player></nftcdn-media-player>`,
    );
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player
        header="attribute header"
      ></nftcdn-media-player>`,
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<NftcdnMediaPlayer>(
      html`<nftcdn-media-player></nftcdn-media-player>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
