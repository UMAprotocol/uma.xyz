import { ComponentMeta, ComponentStory } from "@storybook/react";
import Builder from "components/Builder";
import "../styles/sandpack-override.css";

export default {
  title: "Builder",
  component: Builder,
} as ComponentMeta<typeof Builder>;

const Template: ComponentStory<typeof Builder> = () => (
  <div style={{ padding: "2rem", background: "var(--black)" }}>
    <Builder />
  </div>
);

export const Main = Template.bind({});
Main.args = {};
