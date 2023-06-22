import { Decorator } from "@storybook/react";
import React from "react";
import "styles/fonts.css";
import { GlobalStyle } from "../components/GlobalStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: Decorator[] = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
