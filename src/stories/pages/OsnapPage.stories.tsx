import RootLayout from "@/app/layout";
import { Osnap } from "@/components/pages/Osnap";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Osnap,
};

export default meta;

type Story = StoryObj<typeof Osnap>;

export const Default: Story = {
  render: function Wrapper() {
    return (
      <RootLayout>
        <Osnap />
      </RootLayout>
    );
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/osnap",
      },
    },
  },
};
