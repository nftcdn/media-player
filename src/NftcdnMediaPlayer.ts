import { html, LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js';

type MediaType =
  | 'image'
  | 'html'
  | 'gltf'
  | 'text'
  | 'pdf'
  | 'audio'
  | 'video'
  | 'unknown';

export class NftcdnMediaPlayer extends LitElement {
  @property({ type: String }) src: string | undefined = undefined;

  @property({ type: String }) type: string | undefined = undefined;

  @property({ type: String }) name: string | undefined = undefined;

  @property({ type: String }) ipfsGateway: string = 'https://ipfs.io';

  @property({ type: String }) arGateway: string = 'https://arweave.net';

  @property({ type: Boolean }) autoplay: boolean = false;

  static styles = css`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
    }
    :host([hidden]) {
      display: none;
    }
    img,
    iframe,
    model-viewer,
    object,
    audio,
    video {
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0;
      margin: 0;
    }
    img {
      object-fit: contain;
    }
  `;

  protected dispatch(event: Event) {
    const reEvent = new CustomEvent(event.type, {
      bubbles: event.bubbles,
      composed: true,
      cancelable: event.cancelable,
      detail: event,
    });

    this.dispatchEvent(reEvent);
  }

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
    if (type.startsWith('audio/')) {
      return 'audio';
    }
    if (type.startsWith('video/')) {
      return 'video';
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
        return html`<img
          part="img"
          src=${src}
          alt=${ifDefined(this.name)}
          @load=${(e: Event) => this.dispatch(e)}
          @error=${(e: Event) => this.dispatch(e)}
        />`;

      case 'html':
        return html`<iframe
          part="iframe"
          src=${src}
          title=${ifDefined(this.name)}
          sandbox="allow-scripts allow-downloads"
          allow="geolocation;magnetometer;gyroscope;accelerometer;clipboard-write"
          @load=${(e: Event) => this.dispatch(e)}
          @error=${(e: Event) => this.dispatch(e)}
        ></iframe>`;

      case 'gltf':
        return html`<model-viewer
          part="model-viewer"
          src=${src}
          ar
          auto-rotate
          autoplay
          camera-controls
          ar-status="not-presenting"
          ar-modes="webxr scene-viewer quick-look"
          @load=${(e: Event) => this.dispatch(e)}
          @error=${(e: Event) => this.dispatch(e)}
        ></model-viewer>`;

      case 'pdf':
      case 'text':
        return html`<object
          part="object"
          data=${src}
          type=${ifDefined(this.type)}
          name=${ifDefined(this.name)}
          aria-label=${ifDefined(this.name)}
          @load=${(e: Event) => this.dispatch(e)}
          @error=${(e: Event) => this.dispatch(e)}
        ></object>`;

      case 'audio':
        return html`<audio
          part="audio"
          src=${src}
          controls
          preload="none"
          ?autoplay=${this.autoplay}
          @error=${(e: Event) => this.dispatch(e)}
        ></audio>`;

      case 'video':
        return html`<video
          part="video"
          src=${src}
          controls
          loop
          playsinline
          ?autoplay=${this.autoplay}
          ?muted=${this.autoplay}
          @error=${(e: Event) => this.dispatch(e)}
        ></video>`;

      default:
        return html`<a part="a" href=${src}>${this.name || src}</a>`;
    }
  }
}
