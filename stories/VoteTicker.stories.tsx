import { ComponentMeta, ComponentStory } from "@storybook/react";
import { VoteTicker } from "components";

export default {
  title: "VoteTicker",
  component: VoteTicker,
} as ComponentMeta<typeof VoteTicker>;

const Template: ComponentStory<typeof VoteTicker> = (args) => (
  <div style={{ padding: "2rem", background: `${args.isLightTheme ? "var(--grey-100)" : "var(--black)"}` }}>
    <VoteTicker {...args} />
  </div>
);

export const Light = Template.bind({});
Light.args = {
  isLightTheme: true,
};

export const Dark = Template.bind({});
Dark.args = {
  isLightTheme: false,
};
