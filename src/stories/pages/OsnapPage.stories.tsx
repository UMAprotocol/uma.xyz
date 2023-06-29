import { Layout } from "@/components/Layout";
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
      <Layout>
        <Osnap />
      </Layout>
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
