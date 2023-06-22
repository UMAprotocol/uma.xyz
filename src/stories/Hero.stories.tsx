import Hero from "@/components/Hero";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Hero",
  component: Hero,
} as Meta<typeof Hero>;

const Template: StoryFn<typeof Hero> = () => (
  <div style={{ padding: "2rem", background: "var(--black)" }}>
    <Hero />
  </div>
);

export const Main = {
  render: Template,
  args: {},
};
