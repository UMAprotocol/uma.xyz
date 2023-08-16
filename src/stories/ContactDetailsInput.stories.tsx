import { ContactDetailsInput, useContactDetailsInput } from "@/components/ContactDetailsInput";
import { CommunicationChannel } from "@/components/Osnap/TryOsnapModal";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: ContactDetailsInput,
} satisfies Meta<typeof ContactDetailsInput>;

export default meta;

type Story = StoryObj<{ channel: CommunicationChannel }>;

const Template: Story = {
  args: {
    channel: "discord",
  },
  render: function Wrapper(args) {
    const contactDetailsInputProps = useContactDetailsInput(args.channel);
    return (
      <div className="grid h-screen w-screen place-items-center bg-white">
        <ContactDetailsInput {...contactDetailsInputProps} />
      </div>
    );
  },
};

export const Discord: Story = {
  ...Template,
};

export const Email: Story = {
  ...Template,
  args: {
    channel: "email",
  },
};

export const Telegram: Story = {
  ...Template,
  args: {
    channel: "telegram",
  },
};

export const Other: Story = {
  ...Template,
  args: {
    channel: "other",
  },
};
