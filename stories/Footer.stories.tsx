import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "components/Footer";

export default {
  title: "Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <div style={{ padding: "1rem 2rem", background: "var(--black)" }}>
    <Footer />
  </div>
);

export const Main = Template.bind({});
Main.args = {};
