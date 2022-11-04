import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HowItWorksWip } from "components/HowItWorks/HowItWorksWip";

export default {
  title: "HowItWorks",
  component: HowItWorksWip,
  decorators: [
    (Story) => (
      <div>
        <div style={{ width: "100vw", height: "100vh" }}></div>
        <Story />
        <div style={{ width: "100vw", height: "100vh" }}></div>
      </div>
    ),
  ],
} as ComponentMeta<typeof HowItWorksWip>;

const Template: ComponentStory<typeof HowItWorksWip> = () => <HowItWorksWip />;

export const Default = Template.bind({});
