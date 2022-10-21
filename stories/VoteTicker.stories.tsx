import { ComponentMeta, ComponentStory } from "@storybook/react";
import { VoteTicker } from "components";

export default {
  title: "VoteTicker",
  component: VoteTicker,
} as ComponentMeta<typeof VoteTicker>;

const Template: ComponentStory<typeof VoteTicker> = (args) => (
  <div style={{ padding: "2rem", background: `${args.theme === "light" ? "var(--grey-100)" : "var(--black)"}` }}>
    <VoteTicker {...args} />
  </div>
);

export const Light = Template.bind({});
Light.args = {
  theme: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  theme: "dark",
};
