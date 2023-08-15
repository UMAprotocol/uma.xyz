import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    "storybook-addon-module-mock",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {},
};
module.exports = config;
