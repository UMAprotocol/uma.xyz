import { Decorator } from "@storybook/react";
import { mockDateDecorator } from "storybook-mock-date-decorator";
import "../src/styles/fonts.css";
import "../src/styles/globals.css";
import "../src/styles/sandpack-override.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    defaultViewport: "desktop",
    viewports: {
      smallMobile: {
        name: "Small Mobile",
        styles: {
          height: "100%",
          width: "320px",
        },
        type: "mobile",
      },
      largeMobile: {
        name: "Large Mobile",
        styles: {
          height: "100%",
          width: "640px",
        },
        type: "mobile",
      },
      tablet: {
        name: "Tablet",
        styles: {
          height: "100%",
          width: "1024px",
        },
        type: "tablet",
      },
      laptop: {
        name: "Laptop",
        styles: {
          height: "100%",
          width: "1300px",
        },
        type: "desktop",
      },
      desktop: {
        name: "Desktop",
        styles: {
          height: "100%",
          width: "100%",
        },
        type: "desktop",
      },
    },
  },
  layout: "fullscreen",
  chromatic: {
    viewports: [320, 640, 1024, 1300, 1920],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  date: new Date("2023-05-01"),
  nextjs: {
    appDirectory: true,
  },
};

export const decorators: Decorator[] = [mockDateDecorator];
