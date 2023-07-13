import VoteTicker from "@/components/VoteTicker";
import * as useVotingInfo from "@/hooks";
import { Meta, StoryObj } from "@storybook/react";
import { createMock } from "storybook-addon-module-mock";

const meta: Meta = {
  component: VoteTicker,
};

export default meta;

type Story = StoryObj<typeof VoteTicker>;

const LightTemplate: Story = {
  args: {
    isLightTheme: true,
  },
};

const DarkTemplate: Story = {
  args: {
    isLightTheme: false,
  },
};

export const DarkNoVotes: Story = {
  ...structuredClone(DarkTemplate),
  parameters: makeVotingInfoMock(),
};

export const DarkCommit: Story = {
  ...structuredClone(DarkTemplate),
  parameters: makeVotingInfoMock(3, "commit"),
};

export const DarkReveal: Story = {
  ...structuredClone(DarkTemplate),
  parameters: makeVotingInfoMock(3, "reveal"),
};

export const LightNoVotes: Story = {
  ...structuredClone(LightTemplate),
  parameters: makeVotingInfoMock(),
};

export const LightCommit: Story = {
  ...structuredClone(LightTemplate),
  parameters: makeVotingInfoMock(3, "commit"),
};

export const LightReveal: Story = {
  ...structuredClone(LightTemplate),
  parameters: makeVotingInfoMock(3, "reveal"),
};

function makeVotingInfoMock(activeRequests = 0, phase = "commit") {
  return {
    moduleMock: {
      mock: () => {
        const mock = createMock(useVotingInfo, "useVotingInfo");
        // @ts-expect-error no need to do weird type casts here
        mock.mockReturnValue({ data: { activeRequests, phase } });
        return [mock];
      },
    },
  };
}
