import { RadioGroup } from "@/components/RadioGroup";
import { Meta, StoryObj } from "@storybook/react";
import { useImmer } from "use-immer";

const meta = {
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj;

const Template: Story = {
  render: function Wrapper() {
    const [values, setValues] = useImmer({
      discord: true,
      email: false,
      telegram: false,
      other: false,
    });
    return (
      <div className="w-screen h-screen grid place-items-center bg-white">
        <RadioGroup values={values} setValues={setValues} />
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
};
