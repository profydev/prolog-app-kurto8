import React, { useRef, useState } from "react";
import styled from "styled-components";
import { color, textFont, space } from "@styles/theme";

const MainCoontainer = styled.div`
  width: 20rem;
`;

const Label = styled.label`
  ${textFont("sm", "medium")};
  color: ${color("gray", 700)};
  &.error {
    color: ${color("error", 500)};
  }
`;

const Icon = styled.img``;

const InputValue = styled.input`
  all: unset;
  flex: 1;
`;

const InputContainer = styled.fieldset<{
  disabled: boolean;
  noEntryMade: boolean;
  errorMessage: string;
}>`
  all: unset;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.375rem 0;
  padding: 0.625rem 0.875rem;
  gap: ${space(2)};
  border-radius: ${space(2)};
  background: white;
  ${textFont("md", "regular")};
  color: ${(props) =>
    props.noEntryMade ? color("gray", 500) : color("gray", 900)};
  border: 1px solid
    ${(props) =>
      props.errorMessage ? color("error", 300) : color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  & > img {
    color: ${color("gray", 500)};
  }
  &.focus {
    border: 1px solid
      ${(props) =>
        props.errorMessage ? color("error", 300) : color("primary", 300)};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
      0px 0px 0px 4px
        ${(props) =>
          props.errorMessage ? color("error", 100) : color("primary", 100)};
  }
  &:disabled {
    pointer-events: none;
    background: ${color("gray", 50)};
  }
`;

interface SelectProps {
  placeholder: string;
  iconSrc?: string | undefined;
  label?: string | undefined;
  hint?: string | undefined;
  isDisabled?: boolean;
  errorMessage?: string;
}

export function Input({
  placeholder,
  iconSrc = undefined,
  label = undefined,
  hint = undefined,
  isDisabled = false,
  errorMessage = "",
}: SelectProps) {
  const [value, setValue] = useState(placeholder);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <MainCoontainer>
      {label && <Label htmlFor="select">{label}</Label>}
      <InputContainer
        className={isFocused ? "focus" : ""}
        onClick={() => {
          inputRef.current?.focus();
          setIsFocused(true);
        }}
        disabled={isDisabled && !errorMessage}
        noEntryMade={value === placeholder}
        errorMessage={errorMessage}
      >
        {iconSrc && <Icon src={iconSrc} />}
        <InputValue
          onClick={() => setIsFocused(true)}
          ref={inputRef}
          defaultValue={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setValue("")}
          onBlur={() => setIsFocused(false)}
        />
        {errorMessage && <Icon src="/icons/error.svg" />}
      </InputContainer>
      {errorMessage ? (
        <Label className="error" htmlFor="error message">
          {errorMessage}
        </Label>
      ) : (
        <Label htmlFor="hint">{hint}</Label>
      )}
    </MainCoontainer>
  );
}
