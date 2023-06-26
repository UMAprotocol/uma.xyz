import { Meta, StoryFn } from "@storybook/react";
import VoteTicker from "components/VoteTicker";

export default {
  title: "VoteTicker",
  component: VoteTicker,
} as Meta<typeof VoteTicker>;

const Template: StoryFn<typeof VoteTicker> = (args) => (
  <div style={{ padding: "2rem", background: `${args.isLightTheme ? "var(--grey-100)" : "var(--black)"}` }}>
    <VoteTicker {...args} />
  </div>
);

export const Light = {
  render: Template,

  args: {
    isLightTheme: true,
  },
};

export const Dark = {
  render: Template,

  args: {
    isLightTheme: false,
  },
};
