import { addDecorator } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "components";
import React from "react";
import "styles/fonts.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient();

addDecorator((Story) => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Story />
  </QueryClientProvider>
));
