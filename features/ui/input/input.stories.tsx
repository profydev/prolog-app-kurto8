import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./input";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  placeholder,
  iconSrc,
  label,
  hint,
  isDisabled,
  errorMessage,
}) => (
  <div style={{ padding: 50 }}>
    <Input
      placeholder={placeholder}
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
  placeholder: "olivia@untitledui.com",
  iconSrc: "/icons/mail.svg",
  label: "Email",
  hint: "This is a hint text to help user.",
  isDisabled: false,
  errorMessage: "",
};
Default.parameters = {
  viewMode: "docs",
};
