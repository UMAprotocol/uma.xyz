import { Meta, StoryFn } from "@storybook/react";
import Footer from "components/Footer";

export default {
  title: "Footer",
  component: Footer,
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => (
  <div style={{ padding: "1rem 2rem", background: "var(--black)" }}>
    <Footer />
  </div>
);

export const Main = {
  render: Template,
  args: {},
};
