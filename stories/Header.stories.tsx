import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "components/Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <div style={{ padding: "1rem 2rem", background: "var(--black)" }}>
    <Header />
  </div>
);

export const Main = Template.bind({});
Main.args = {};
