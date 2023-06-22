import VoteParticipation from "@/components/VoteParticipation";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "VoteParticipation",
  component: VoteParticipation,
} as Meta<typeof VoteParticipation>;

const Template: StoryFn<typeof VoteParticipation> = () => (
  <div style={{ padding: "2rem", background: "var(--black)" }}>
    <VoteParticipation />
  </div>
);

export const Main = {
  render: Template,
  args: {},
};
