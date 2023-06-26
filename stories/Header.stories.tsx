import { Meta, StoryFn } from "@storybook/react";
import Header from "components/Header";

export default {
  title: "Header",
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => (
  <div style={{ padding: "1rem 2rem", background: "var(--black)" }}>
    <Header />
  </div>
);

export const Main = {
  render: Template,
  args: {},
};
