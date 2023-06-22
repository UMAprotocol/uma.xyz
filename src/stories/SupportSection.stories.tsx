import SupportSection from "@/components/SupportSection";
import { Meta, StoryFn } from "@storybook/react";
import "../styles/sandpack-override.css";

export default {
  title: "SupportSection",
  component: SupportSection,
} as Meta<typeof SupportSection>;

const Template: StoryFn<typeof SupportSection> = () => (
  <div style={{ padding: "2rem", background: "var(--black)" }}>
    <SupportSection />
  </div>
);

export const Main = {
  render: Template,
  args: {},
};
