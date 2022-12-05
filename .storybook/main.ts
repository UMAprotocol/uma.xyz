import type { StorybookConfig } from "@storybook/react/types";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
    "storybook-addon-pseudo-states",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    // this modifies the existing image rule to exclude .svg files
    // since we want to handle those files with @svgr/webpack
    const imageRule = config?.module?.rules?.find((rule) => {
      if (!rule || rule === "...") return;
      if (rule.test instanceof RegExp) return rule.test.test(".svg");
    });

    if (imageRule && imageRule !== "...") {
      imageRule.exclude = /\.svg$/;
    }

    // configure .svg files to be loaded with @svgr/webpack
    config?.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = config;
