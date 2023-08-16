import { Hero } from "@/components/OsnapV2/Hero";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof Hero>;

const Template: Story = {};

export const Default: Story = {
  ...Template,
};
