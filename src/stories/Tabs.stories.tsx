import Tabs from "@/components/Tabs";
import TubeIcon from "@/public/assets/tube.svg";
import WandIcon from "@/public/assets/wand.svg";
import { Meta, StoryFn } from "@storybook/react";
export default {
  title: "Tabs",
  component: Tabs,
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = () => (
  <div style={{ padding: "2rem", background: "var(--white)" }}>
    <Tabs />
  </div>
);

export const Main = {
  render: Template,

  args: {
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
  },
};
