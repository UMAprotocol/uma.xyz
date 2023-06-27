import { ScrollProvider } from "@/contexts";
import HomePage from "@/app/page";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: HomePage,
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  render: function Wrapper() {
    return (
      <ScrollProvider>
        <HomePage />
      </ScrollProvider>
    );
  },
};
