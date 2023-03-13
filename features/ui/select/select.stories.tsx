import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectPL, SelectVariant } from "./select";

export default {
  title: "UI/SelectPL",
  component: SelectPL,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SelectPL>;

const Template: ComponentStory<typeof SelectPL> = ({
  placeholder,
  selectItems,
  iconSrc,
  label,
  hint,
  variant,
  isDisabled,
}) => (
  <div style={{ padding: 50 }}>
    <SelectPL
      placeholder={placeholder}
      selectItems={selectItems}
      iconSrc={iconSrc}
      label={label}
      hint={hint}
      variant={variant}
      isDisabled={isDisabled}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select team member",
  selectItems: [
    "Phoenix Baker",
    "Olivia Rhye",
    "Lana Steiner",
    "Demi Wilkinson",
    "Candice Wu",
    "Natali Craig",
    "Drew Cano",
  ],
  iconSrc: "/icons/users.svg",
  label: "Team member",
  hint: "This is a hint text to help user.",
  variant: SelectVariant.primary,
  isDisabled: false,
};
Default.parameters = {
  viewMode: "docs",
};
