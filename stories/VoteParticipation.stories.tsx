import { ComponentMeta, ComponentStory } from "@storybook/react";
import { VoteParticipation } from "components";
import { DEFAULT_APY } from "components/VoteParticipation/VoteParticipation";

export default {
  title: "VoteParticipation",
  component: VoteParticipation,
} as ComponentMeta<typeof VoteParticipation>;

const Template: ComponentStory<typeof VoteParticipation> = () => (
  <div style={{ padding: "2rem", background: "var(--black)" }}>
    <VoteParticipation apy={DEFAULT_APY} />
  </div>
);

export const Main = Template.bind({});
Main.args = {};
