import type { StorybookConfig } from '@web/storybook-framework-web-components';

const config: StorybookConfig = {
  // Required
  framework: '@web/storybook-framework-web-components',
  stories: ['../**/dist/stories/*.stories.{js,md,mdx}'],

  // Optional
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
  },
  addons: ['@storybook/addon-backgrounds', '@storybook/addon-controls'],
  docs: {
    autodocs: 'tag',
  },
};

export default config;
