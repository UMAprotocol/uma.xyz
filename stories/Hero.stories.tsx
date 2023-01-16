import { ComponentMeta, ComponentStory } from "@storybook/react";
import Hero from "components/Hero";

export default {
  title: "Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => (
  <div style={{ padding: "2rem", background: "var(--black)" }}>
    <Hero />
  </div>
);

export const Main = Template.bind({});
Main.args = {};
