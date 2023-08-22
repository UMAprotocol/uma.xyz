import { Tweets } from "@/components/OsnapV2/Tweets";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Tweets,
};

export default meta;

type Story = StoryObj<typeof Tweets>;

const Template: Story = {};

export const Default: Story = {
  ...Template,
};
