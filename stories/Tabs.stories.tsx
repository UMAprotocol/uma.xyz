import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tabs } from "components";
import WandIcon from "public/assets/wand.svg";
import TubeIcon from "public/assets/tube.svg";
export default {
  title: "Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <div style={{ padding: "2rem", background: "var(--white)" }}>
    <Tabs {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  tabs: [
    {
      title: "Tab One",
      content: <div>This is the Tab One content</div>,
      Icon: WandIcon,
    },
    {
      title: "Tab Two",
      content: <div>This is the Tab Two content</div>,
      Icon: TubeIcon,
    },
  ],
};
