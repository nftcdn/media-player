# \<nftcdn-media-player>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

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
