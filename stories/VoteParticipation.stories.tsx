import { ComponentMeta, ComponentStory } from "@storybook/react";
import { VoteParticipation } from "components";

export default {
  title: "VoteParticipation",
  component: VoteParticipation,
} as ComponentMeta<typeof VoteParticipation>;

const Template: ComponentStory<typeof VoteParticipation> = () => (
  <div style={{ padding: "2rem", background: "var(--black)" }}>
    <VoteParticipation heightFromTop={0} />
  </div>
);

export const Main = Template.bind({});
Main.args = {};
