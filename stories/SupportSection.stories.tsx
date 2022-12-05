import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SupportSection } from "components";
import "../styles/sandpack-override.css";

export default {
  title: "SupportSection",
  component: SupportSection,
} as ComponentMeta<typeof SupportSection>;

const Template: ComponentStory<typeof SupportSection> = () => (
  <div style={{ padding: "2rem", background: "var(--black)" }}>
    <SupportSection />
  </div>
);

export const Main = Template.bind({});
Main.args = {};
