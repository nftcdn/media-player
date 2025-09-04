# \<nftcdn-media-player>

This is a generic media viewer/player [web component](https://www.webcomponents.org/introduction) originally designed to display Cardano NFTs.

It supports the following media:

- Images
- Videos
- Audio files
- Web documents (HTML/Javascript/Css)
- PDF and plain text documents
- 3D models

## Installation

```bash
npm i nftcdn-media-player
```

## Usage

```html
<script type="module">
  import 'nftcdn-media-player/nftcdn-media-player.js';
</script>

<nftcdn-media-player src="URL" type="MIME" name="NAME"></nftcdn-media-player>
```

### Attributes

| Name            | Requirement                                                                       | Default             | Description |
| :-------------- | :-------------------------------------------------------------------------------- | :------------------ | :---------- |
| `src`           | mandatory                                                                         | undefined           | media URL |
| `type`          | mandatory except for images                                                       | undefined           | [media/mime type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| `name`          | required for [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) compliance | undefined           | unique media name |
| `ipfsgateway`\* | optional                                                                          | https://ipfs.io     | IPFS gateway |
| `argateway`\*   | optional                                                                          | https://arweave.net | Arweave gateway |
| `autoplay`      | optional                                                                          | true                | Play automatically. Supported by audio and video media. Implies `muted` when enabled for videos. |

\* JavaScript properties are `ipfsGateway` and `arGateway`.

## Features

- IPFS & Arweave URLs support (including gateway setting)
- Data URLs support (for example used in on-chain NFTs)
- Follows the [open-wc](https://github.com/open-wc/open-wc) recommendation

### Supported media types

- `image/*`: `<img>` element [browsers supported formats](https://caniuse.com/?search=image%20format)
- `video/*`: `<video>` element [browsers supported formats](https://caniuse.com/?search=video%20format)
- `audio/*`: `<audio>` element [browsers supported formats](https://caniuse.com/?search=audio%20format)
- `text/html`: HTML/Javascript/Css versions supported by browsers
- `application/pdf`: using browsers native PDF viewer
- `text/plain`
- `model/gltf+json, model/gltf-binary`: versions supported by [`<model-viewer>`](https://modelviewer.dev/)

## Demoing with Storybook

The Storybook is build on commits with GitHub Actions and published online to GitHub Pages:  
https://nftcdn.github.io/media-player

To run a local instance of the Storybook, run

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

Pull requests must maintain 100% code coverage.
