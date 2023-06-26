import { Meta, StoryFn } from "@storybook/react";
import Builder from "components/Builder";
import "../styles/sandpack-override.css";

export default {
  title: "Builder",
  component: Builder,
} as Meta<typeof Builder>;

const Template: StoryFn<typeof Builder> = () => (
  <div style={{ padding: "2rem", background: "var(--black)" }}>
    <Builder />
  </div>
);

export const Main = {
  render: Template,
  args: {},
};
