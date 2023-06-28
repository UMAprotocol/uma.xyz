import VoteTicker from "@/components/VoteTicker";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "VoteTicker",
  component: VoteTicker,
} as Meta<typeof VoteTicker>;

const Template: StoryFn<typeof VoteTicker> = (args) => (
  <div style={{ padding: "2rem", background: `${args.isLightTheme ? "var(--grey-900)" : "var(--black)"}` }}>
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
