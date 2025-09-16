import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  // Required
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  //framework: '@web/storybook-framework-web-components',
  stories: ['../**/dist/stories/*.stories.{js,md,mdx}'],

  // Optional
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
  },
  addons: [],
  docs: {},
};

export default config;
