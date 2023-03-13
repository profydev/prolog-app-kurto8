import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

export enum SelectVariant {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
}

const MainCoontainer = styled.div``;

const SelectContainer = styled.fieldset<{
  variant: SelectVariant;
  disabled: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.625rem 0.875rem;
  gap: ${space(2)};
  width: 20rem;
  border-radius: ${space(2)};
  background: white;
  border: 1px solid ${color(SelectVariant.gray, 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  & > img {
    color: ${color(SelectVariant.gray, 500)};
  }

  & > options {
    color: ${color(SelectVariant.gray, 900)};
  }

  & > options:first-of-type {
    color: ${color(SelectVariant.gray, 500)};
  }

  &:focus {
    border: 1px solid ${color(SelectVariant.primary, 300)};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
  }

  &:disabled {
    pointer-events: none;
    background: ${color(SelectVariant.primary, 200)};
    border: 1px solid ${color(SelectVariant.primary, 200)};
  }
`;

const Icon = styled.img`
  height: 1em;
`;

const SelectStyles = styled.select`
  cursor: pointer;
  flex: 1;

  &:focus {
    outline: none;
  }
  // remove default select styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
`;

interface SelectProps {
  placeholder: string;
  selectItems: string[];
  iconSrc?: string | undefined;
  label?: string | undefined;
  hint?: string | undefined;
  variant?: SelectVariant;
  isDisabled?: boolean;
}

export function SelectPL({
  placeholder,
  selectItems,
  iconSrc = undefined,
  label = undefined,
  hint = undefined,
  variant = SelectVariant.primary,
  isDisabled = false,
}: SelectProps) {
  const [value, setValue] = useState(placeholder);

  const itemsList = selectItems.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  // const selectedItemsWithPlaceholder = selectItems.splice(0, 0, placeholder).map(item => {
  //   return { value: item, icon: <Icon src={iconSrc}/>}
  // })

  return (
    <MainCoontainer>
      {label && <label htmlFor="select">{label}</label>}
      <SelectContainer variant={variant} disabled={isDisabled}>
        {/* <option value={placeholder}>{placeholder}</option>
        {itemsList} */}
        {iconSrc && <Icon src={iconSrc} />}
        <SelectStyles
          name="select"
          id="select"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
          <option value={placeholder}>{placeholder}</option>
          {itemsList}
        </SelectStyles>
        {/* <Icon src="/icons/chevron-down.svg"/> */}
      </SelectContainer>
      {hint && <label>{hint}</label>}
    </MainCoontainer>
  );
}
