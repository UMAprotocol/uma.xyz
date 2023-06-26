import RootLayout from "@/app/layout";
import Home from "@/app/page";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Home,
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  render: function Wrapper() {
    return (
      <RootLayout>
        <Home />
      </RootLayout>
    );
  },
};
