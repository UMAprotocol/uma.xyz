import { RadioGroup, useRadioGroup } from "@/components/RadioGroup";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj;

const Template: Story = {
  render: function Wrapper() {
    const values = ["stuff", "things", "other", "more"];
    const title = "test title 123";
    const radioGroupProps = useRadioGroup(title, values);
    return (
      <div className="w-screen h-screen grid place-items-center bg-white">
        <RadioGroup {...radioGroupProps} />
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
};
