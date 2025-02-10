const config = {
  stories: ['../**/dist/stories/*.stories.{js,md,mdx}'],
  framework: {
    name: '@web/storybook-framework-web-components',
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
