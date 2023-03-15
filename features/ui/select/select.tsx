import React, { useState } from "react";
import styled from "styled-components";
import { color, textFont, space } from "@styles/theme";

const MainCoontainer = styled.div`
  min-width: 8rem;
`;

const Label = styled.label`
  ${textFont("sm", "medium")};
  color: ${color("gray", 700)};

  &.error {
    color: ${color("error", 500)};
  }
`;

const Icon = styled.img`
  &.rotate-180 {
    transform: rotate(180deg);
  }
`;

const SelectedValue = styled.div`
  flex: 1;
`;

const SelectContainer = styled.button<{
  disabled: boolean;
  noSelectionMade: boolean;
  errorMessage: string;
}>`
  all: unset;
  cursor: pointer;
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
    props.noSelectionMade ? color("gray", 500) : color("gray", 900)};
  border: 1px solid
    ${(props) =>
      props.errorMessage ? color("error", 300) : color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  & > img {
    color: ${color("gray", 500)};
  }

  &:focus {
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

const Anchor = styled.a`
  text-decoration: none;
  ${textFont("md", "regular")};
  color: ${color("gray", 900)};
`;

const AnchorContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 8rem;
  padding: 0.625rem 0.875rem;
  background: ${(props) => (props.isSelected ? color("primary", 25) : "white")};
`;

const DropDownMenu = styled.div<{ isVisible: boolean }>`
  cursor: pointer;
  position: absolute;
  padding: ${space(1, 0)};
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  background-color: white;
  border-radius: ${space(2)};
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);

  & ${AnchorContainer}:first-of-type a {
    color: ${color("gray", 300)};
  }
`;

interface SelectProps {
  placeholder: string;
  selectItems: string[];
  iconSrc?: string | undefined;
  label?: string | undefined;
  hint?: string | undefined;
  isDisabled?: boolean;
  errorMessage?: string;
}

export function Select({
  placeholder,
  selectItems,
  iconSrc = undefined,
  label = undefined,
  hint = undefined,
  isDisabled = false,
  errorMessage = "",
}: SelectProps) {
  const [value, setValue] = useState(placeholder);
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const itemsList = selectItems.map((item) => {
    return (
      <AnchorContainer
        key={item}
        onClick={() => {
          setValue(item);
          setDropDownVisible(false);
        }}
        isSelected={value === item}
      >
        <Anchor href="#">{item}</Anchor>
        {item === value && <Icon src="/icons/check-mark.svg" />}
      </AnchorContainer>
    );
  });

  return (
    <MainCoontainer>
      {label && <Label htmlFor="select">{label}</Label>}
      <SelectContainer
        onClick={() => setDropDownVisible(!dropDownVisible)}
        disabled={isDisabled && !errorMessage}
        noSelectionMade={value === placeholder}
        errorMessage={errorMessage}
      >
        {iconSrc && <Icon src={iconSrc} />}
        <SelectedValue>{value}</SelectedValue>
        <Icon
          className={dropDownVisible ? "rotate-180" : ""}
          src="/icons/chevron-down.svg"
        />
      </SelectContainer>
      <DropDownMenu isVisible={dropDownVisible}>
        <AnchorContainer
          onClick={() => {
            setValue(placeholder);
            setDropDownVisible(false);
          }}
          isSelected={value === placeholder}
        >
          <Anchor href="#">Clear Selection</Anchor>
        </AnchorContainer>
        {itemsList}
      </DropDownMenu>
      {errorMessage ? (
        <Label className="error" htmlFor="error message">
          {errorMessage}
        </Label>
      ) : (
        <Label htmlFor="error message">{hint}</Label>
      )}
    </MainCoontainer>
  );
}
