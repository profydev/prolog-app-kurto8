import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProLogButton, ButtonSize, ButtonVariant } from "./button";

export default {
  title: "UI/ProLogButton",
  component: ProLogButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ProLogButton>;

const Template: ComponentStory<typeof ProLogButton> = ({
  size,
  variant,
  onClick,
  isDisabled,
}) => (
  <div style={{ padding: 50 }}>
    <ProLogButton
      variant={variant}
      size={size}
      onClick={onClick}
      isDisabled={isDisabled}
    >
      Label
    </ProLogButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.sm,
  variant: ButtonVariant.primary,
  onClick: () => ({ focus: true }),
  isDisabled: false,
};
Default.parameters = {
  viewMode: "docs",
};
