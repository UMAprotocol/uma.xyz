import { Description } from "@/components/Osnap/Description";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Description,
};

export default meta;

type Story = StoryObj<typeof Description>;

const Template: Story = {};

export const Default: Story = {
  ...Template,
};
