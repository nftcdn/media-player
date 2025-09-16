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
  addons: ['@storybook/addon-backgrounds', '@storybook/addon-controls'],
  docs: {},
};

export default config;
