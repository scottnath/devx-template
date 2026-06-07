import { defineMain } from '@storybook-astro/framework/node';

export default defineMain({
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  framework: {
    name: '@storybook-astro/framework',
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/devx-template/storybook/';
    }
    return config;
  },
});
