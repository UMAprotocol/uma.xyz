import { Icon } from "@/components/Icon";
import { Meta } from "@storybook/react";

const meta = {
  title: "All the icons",
} as Meta;

export default meta;

const iconIds = [
  "arrow",
  "across",
  "cozy",
  "boba",
  "arrows",
  "chart",
  "chat",
  "clock",
  "cube",
  "discord",
  "discourse",
  "flash",
  "github",
  "globe",
  "medium",
  "message-heart",
  "oo-logo",
  "osnap-logo",
  "outcome",
  "polymarket",
  "rated",
  "rocket",
  "scale",
  "settings",
  "shapeshift",
  "sherlock",
  "snapshot",
  "telescope",
  "tube",
  "twitter",
  "uma-logo",
  "wand",
  "zap",
];

export const AllTheIcons = {
  render: function Wrapper() {
    return (
      <div className="m-6 bg-white">
        {iconIds.map((id) => (
          <div key={id} className="inline-block m-2">
            <Icon name={id} />
          </div>
        ))}
      </div>
    );
  },
};
