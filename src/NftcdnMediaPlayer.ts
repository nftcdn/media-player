import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js';

type MediaType = 'image' | 'html' | 'gltf' | 'text' | 'unknown';

export class NftcdnMediaPlayer extends LitElement {
  @property({ type: String }) src: string | undefined = undefined;

  @property({ type: String }) type: string | undefined = undefined;

  @property({ type: String }) name: string | undefined = undefined;

  mediaType(): MediaType {
    const type = this.type ? this.type.trim() : undefined;

    if (type === undefined || type.startsWith('image/')) {
      return 'image';
    }
    if (type.startsWith('text/html')) {
      return 'html';
    }
    if (type.startsWith('model/gltf')) {
      return 'gltf';
    }
    return 'unknown';
  }

  render() {
    if (this.src === undefined) {
      return html`<p>
        Error: nftcdn-media-player requires a "src" attribute.
      </p>`;
    }

    let { src } = this;
    const type = this.mediaType();

    if (src.includes('ipfs')) {
      src = this.src.replace(/^(ipfs[:/]+)+/, 'https://ipfs.io/ipfs/');
    } else if (src.includes('ar://')) {
      src = this.src.replace(/ar:\/\//, 'https://arweave.net/');
    }

    switch (type) {
      case 'image':
        return html`<image src=${src} alt=${ifDefined(this.name)} />`;

      case 'html':
        return html`<iframe src=${src} title=${ifDefined(this.name)}></iframe>`;

      case 'gltf':
        return html`<model-viewer
          src=${src}
          ar
          auto-rotate
          autoplay="true"
          camera-controls
          ar-status="not-presenting"
          ar-modes="webxr scene-viewer quick-look"
        ></model-viewer>`;

      default:
        return html`<a href=${src}>${this.name ? this.name : src}</a>`;
    }
  }
}
