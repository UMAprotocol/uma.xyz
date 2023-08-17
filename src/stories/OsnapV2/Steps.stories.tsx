import { Steps } from "@/components/OsnapV2/Steps";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Steps,
};

export default meta;

type Story = StoryObj<typeof Steps>;

const Template: Story = {};

export const Default: Story = {
  ...Template,
  render: function Wrapper() {
    return (
      <div>
        <Steps />
      </div>
    );
  },
};
