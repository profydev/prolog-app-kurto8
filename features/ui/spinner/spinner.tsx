import { color } from "@styles/theme";
import styled from "styled-components";

export const Spinner = styled.div`
  --width: 8px;
  --edges: calc(var(--width) / 4);
  --color: ${color("primary", 600)};
  --size: 58px;

  border: var(--width) solid ${color("primary", 50)};
  border-top: var(--width) solid var(--color);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  animation: spin 2s linear infinite;
  position: relative;

  &:before,
  &:after {
    content: "";
    width: var(--width);
    height: var(--width);
    border-radius: 50%;
    background: var(--color);
    position: absolute;
    top: var(--edges);
  }

  &:before {
    left: var(--edges);
  }

  &:after {
    right: var(--edges);
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
