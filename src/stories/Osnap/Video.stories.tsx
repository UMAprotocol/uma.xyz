import { Video } from "@/components/Osnap/Video";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Video,
};

export default meta;

type Story = StoryObj<typeof Video>;

const Template: Story = {};

export const Default: Story = {
  ...Template,
};
