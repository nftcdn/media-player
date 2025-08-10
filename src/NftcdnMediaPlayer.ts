import { html, LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js';

type MediaType = 'image' | 'html' | 'gltf' | 'text' | 'pdf' | 'unknown';

export class NftcdnMediaPlayer extends LitElement {
  @property({ type: String }) src: string | undefined = undefined;

  @property({ type: String }) type: string | undefined = undefined;

  @property({ type: String }) name: string | undefined = undefined;

  @property({ type: String }) ipfsGateway: string = 'https://ipfs.io';

  @property({ type: String }) arGateway: string = 'https://arweave.net';

  static styles = css`
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0;
      margin: 0;
      overflow: hidden;
    }
    model-viewer {
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0;
      margin: 0;
      white-space: normal;
    }
    object {
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0;
      margin: 0;
    }
  `;

  protected mediaType(): MediaType {
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
    if (type.startsWith('application/pdf')) {
      return 'pdf';
    }
    if (type.startsWith('text/plain')) {
      return 'text';
    }
    return 'unknown';
  }

  protected render() {
    if (this.src === undefined) {
      return html`<p>
        Error: nftcdn-media-player requires a "src" attribute.
      </p>`;
    }

    let { src } = this;
    const type = this.mediaType();

    if (src.includes('ipfs')) {
      src = this.src.replace(/^(ipfs[:/]+)+/, `${this.ipfsGateway}/ipfs/`);
    } else if (src.includes('ar://')) {
      src = this.src.replace(/ar:\/\//, `${this.arGateway}/`);
    }

    switch (type) {
      case 'image':
        return html`<image src=${src} alt=${ifDefined(this.name)} />`;

      case 'html':
        return html`<iframe
          src=${src}
          title=${ifDefined(this.name)}
          sandbox="allow-scripts allow-downloads allow-same-origin"
          allow="geolocation;magnetometer;gyroscope;accelerometer;clipboard-write"
        ></iframe>`;

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

      case 'pdf':
      case 'text':
        return html`<object
          data=${src}
          type=${this.type}
          name=${ifDefined(this.name)}
          aria-label=${ifDefined(this.name)}
        ></object>`;

      default:
        return html`<a href=${src}>${this.name ? this.name : src}</a>`;
    }
  }
}
