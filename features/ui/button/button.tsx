import React, { MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";
import Link from "next/link";
import { Url } from "url";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
}

const Container = styled.fieldset<{
  size: ButtonSize;
  variant: ButtonVariant;
  disabled: boolean;
}>`
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: ${space(2)};
  border-radius: ${space(2)};

  --box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  ${(props) => {
    switch (props.size) {
      case ButtonSize.sm:
        return css`
          padding: 0.5rem 0.875rem;
          ${textFont("sm", "medium")}
        `;
      case ButtonSize.md:
        return css`
          padding: 0.625rem 1rem;
          ${textFont("sm", "medium")}
        `;
      case ButtonSize.lg:
        return css`
          padding: 0.625rem 1.125rem;
          ${textFont("md", "medium")}
        `;
      case ButtonSize.xl:
        return css`
          padding: 0.725rem 1.25rem;
          ${textFont("md", "medium")}
        `;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case ButtonVariant.primary:
        return css`
          background: ${color(ButtonVariant.primary, 600)};
          pointer-events: props => props.disabled ? none : auto;
          box-shadow: var(--box-shadow);
          border: 1px solid ${color(ButtonVariant.primary, 600)};

          &>button, >a {
            color: white;
          } 

          &:hover {
            background: ${color(ButtonVariant.primary, 700)};
          }

          &:focus {
            border: ${space(1)} solid ${color(ButtonVariant.primary, 100)}
          }

          &:disabled {
            background: ${color(ButtonVariant.primary, 200)};
            border: 1px solid ${color(ButtonVariant.primary, 200)};
          }
        `;
      case ButtonVariant.secondary:
        return css`
          background: ${color(ButtonVariant.primary, 50)};
          box-shadow: var(--box-shadow);
          border: 1px solid ${color(ButtonVariant.primary, 50)};

          & > button,
          > a {
            color: ${color(ButtonVariant.primary, 700)};
          }

          &:hover {
            background: ${color(ButtonVariant.primary, 100)};
          }

          &:focus {
            border: ${space(1)} solid ${color(ButtonVariant.primary, 100)};
          }

          &:disabled {
            background: ${color(ButtonVariant.primary, 25)};
            border: 1px solid ${color(ButtonVariant.primary, 25)};
          }

          &:disabled > button,
          :disabled > button {
            color: ${color(ButtonVariant.primary, 300)};
          }
        `;
      case ButtonVariant.gray:
        return css`
          background: white;
          box-shadow: var(--box-shadow);
          border: 1px solid ${color(ButtonVariant.gray, 300)};

          & > button,
          > a {
            color: ${color(ButtonVariant.gray, 700)};
          }

          &:hover {
            background: ${color(ButtonVariant.gray, 50)};
          }

          &:focus {
            border: ${space(1)} solid ${color(ButtonVariant.gray, 100)};
          }

          &:disabled {
            background: white;
            border: 1px solid ${color(ButtonVariant.gray, 200)};
          }

          &:disabled > button,
          :disabled > button {
            color: ${color(ButtonVariant.gray, 300)};
          }
        `;
      case ButtonVariant.empty:
        return css`
          background: transparent;
          border: none;

          & > button,
          > a {
            color: ${color(ButtonVariant.primary, 700)};
          }

          &:hover {
            background: ${color(ButtonVariant.primary, 50)};
          }

          &:disabled {
            background: transparent;
          }

          &:disabled > button,
          :disabled > button {
            color: ${color(ButtonVariant.gray, 300)};
          }
        `;
      case ButtonVariant.emptyGray:
        return css`
          background: transparent;
          border: none;

          & > button,
          > a {
            color: ${color(ButtonVariant.gray, 500)};
          }

          &:hover {
            background: ${color(ButtonVariant.gray, 50)};
            color: ${color(ButtonVariant.gray, 600)};
          }

          &:disabled {
            background: transparent;
          }

          &:disabled > button,
          :disabled > button {
            color: ${color(ButtonVariant.gray, 300)};
          }
        `;
      case ButtonVariant.error:
        return css`
          background: ${color(ButtonVariant.error, 600)};
          box-shadow: var(--box-shadow);
          border: 1px solid ${color(ButtonVariant.error, 600)};

          & > button,
          > a {
            color: white;
          }

          &:hover {
            background: ${color(ButtonVariant.error, 700)};
          }

          &:focus {
            border: ${space(1)} solid ${color(ButtonVariant.error, 100)};
          }

          &:disabled {
            background: ${color(ButtonVariant.error, 200)};
            border: 1px solid ${color(ButtonVariant.error, 200)};
          }
        `;
    }
  }}
`;

const Button = styled.button`
  cursor: pointer;
  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

type ButtonProps = {
  children: React.ReactNode;
  onClick: MouseEventHandler;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isDisabled?: boolean;
};

export function ProLogButton({
  children,
  onClick,
  size = ButtonSize.md,
  variant = ButtonVariant.primary,
  isDisabled = false,
}: ButtonProps) {
  return (
    <Container size={size} variant={variant} disabled={isDisabled}>
      <Button onMouseUp={onClick}>{children}</Button>
    </Container>
  );
}

const Anchor = styled(Link)`
  cursor: pointer;
  // remove default Link styles
  border: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

type AnchorProps = {
  children: React.ReactNode;
  url: Url;
  onClick: MouseEventHandler;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isDisabled?: boolean;
};

export function ProLogAnchor({
  children,
  onClick,
  url,
  size = ButtonSize.md,
  variant = ButtonVariant.primary,
  isDisabled = false,
}: AnchorProps) {
  return (
    <Container size={size} variant={variant} disabled={isDisabled}>
      <Anchor href={url} onMouseUp={onClick}>
        {children}
      </Anchor>
    </Container>
  );
}
