import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./select";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  placeholder,
  selectItems,
  iconSrc,
  label,
  hint,
  isDisabled,
  errorMessage,
}) => (
  <div style={{ padding: 50 }}>
    <Select
      placeholder={placeholder}
      selectItems={selectItems}
      iconSrc={iconSrc}
      label={label}
      hint={hint}
      isDisabled={isDisabled}
      errorMessage={errorMessage}
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
  isDisabled: false,
  errorMessage: "",
};
Default.parameters = {
  viewMode: "docs",
};
