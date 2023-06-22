import { Meta, StoryObj } from "@storybook/react";
import { ScrollProvider } from "contexts";
import HomePage from "pages";

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
