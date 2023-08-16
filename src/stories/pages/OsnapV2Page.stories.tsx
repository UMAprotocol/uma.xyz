import { Layout } from "@/components/Layout";
import { OsnapV2 } from "@/components/pages/OsnapV2";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: OsnapV2,
};

export default meta;

type Story = StoryObj<typeof OsnapV2>;

export const Default: Story = {
  render: function Wrapper() {
    return (
      <Layout>
        <OsnapV2 />
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
