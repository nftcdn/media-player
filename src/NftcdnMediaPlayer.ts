import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import MIMEType from 'whatwg-mimetype';

type MediaType = 'image' | 'html' | 'gltf' | 'text' | 'unknown';

export class NftcdnMediaPlayer extends LitElement {
  @property({ type: String }) src =
    'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22/%3E';

  @property({ type: String }) type: string | undefined = undefined;

  @property({ type: String }) alt: string | undefined = undefined;

  mediaType(): MediaType {
    if (this.type === undefined) {
      return 'image';
    }

    const mime = MIMEType.parse(this.type);

    if (mime === null) {
      return 'unknown';
    }
    if (mime.type === 'image') {
      return 'image';
    }
    if (mime.isHTML()) {
      return 'html';
    }
    if (mime.essence.startsWith('model/gltf')) {
      return 'gltf';
    }
    return 'unknown';
  }

  render() {
    let { src } = this;
    const type = this.mediaType();

    if (src.includes('ipfs')) {
      src = this.src.replace(/^(ipfs[:/]+)+/, 'https://ipfs.io/ipfs/');
    } else if (src.includes('ar://')) {
      src = this.src.replace(/ar:\/\//, 'https://arweave.net/');
    }

    switch (type) {
      case 'image':
      default:
        return html`<image src="${src}" alt="${ifDefined(this.alt)}" />`;
    }
  }
}
