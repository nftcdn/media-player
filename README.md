# \<nftcdn-media-player>

This is a generic media viewer/player [web component](https://www.webcomponents.org/introduction) originally designed to display Cardano NFTs.

It supports the following media:
- Images
- Videos (upcoming)
- Audio files (upcoming)
- Web documents (HTML/Javascript/Css)
- 3D models
- PDF documents (upcoming)

## Installation

Once version 1.0 is released, installation with npm will be supported:
```bash
npm i nftcdn-media-player
```

## Usage

```html
<script type="module">
  import 'nftcdn-media-player/nftcdn-media-player.js';
</script>

<nftcdn-media-player src=URL type=MIME name=NAME></nftcdn-media-player>
```

### Attributes
| Name | Requirement | Default   | Description |
|:-----|:------------|:----------|:------------|
|`src` | mandatory   | undefined | media URL   |
|`type`| mandatory except for images  | undefined | [media/mime type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
|`name` | required for [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) compliance | undefined | unique media name   |

## Features
- Follows the [open-wc](https://github.com/open-wc/open-wc) recommendation
- IPFS & Arweave URLs support
- Data URLs support (for example used in on-chain NFTs)

### Supported media types
- `image/*`: formats supported by browsers `<img>` element
- `text/html`: HTML/Javascript/Css versions supported by browsers
- `model/gltf+json, model/gltf-binary`: versions supported by [`<model-viewer>`](https://modelviewer.dev/)

### Planned media types
- `video/*`: formats supported by browsers `<video>` element
- `audio/*`: formats supported by browsers `<audio>` element
- `application/pdf`: versions supported by [PDF.js](https://mozilla.github.io/pdf.js/)

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
