import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  ProLogButton,
  ButtonSize,
  ButtonVariant,
  IconOptions,
} from "./proLogButton";

export default {
  title: "UI/ProLogButton",
  component: ProLogButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ProLogButton>;

const Template: ComponentStory<typeof ProLogButton> = ({
  onClick,
  label,
  icon,
  iconSrc,
  size,
  variant,
  isDisabled,
}) => (
  <div style={{ padding: 50 }}>
    <ProLogButton
      onClick={onClick}
      label={label}
      icon={icon}
      iconSrc={iconSrc}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => ({}),
  label: "Alert",
  icon: IconOptions.none,
  iconSrc: "/icons/alert.svg",
  size: ButtonSize.sm,
  variant: ButtonVariant.primary,
  isDisabled: false,
};
Default.parameters = {
  viewMode: "docs",
};
