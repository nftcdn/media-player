import type { Preview } from '@storybook/web-components-vite';

const preview: Preview = {
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    layout: 'fullscreen',
    actions: {
      disable: true,
    },
  },
};

export default preview;
