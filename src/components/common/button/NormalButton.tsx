import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  focus?: boolean;
}

function NormalButton({ width, type = "button", focus, ...props }: Props) {
  return <Wrapper focus={focus} type={type} {...props} />;
}

export default NormalButton;

const Wrapper = styled.input<{ width?: number; focus?: boolean }>`
  cursor: pointer;
  width: ${({ width }) => (width ? `${width}px` : "140px")};
  height: 56px;
  border: 1.5px solid ${({ theme }) => theme.colors.main.default};
  border-radius: 8px;
  background-color: ${({ theme, focus }) =>
    focus ? theme.colors.main.default : theme.colors.background.light};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  ${({ theme }) => theme.fontSizes.nav2}

  :hover {
    text-decoration: underline;
  }

  :active {
    transition: 0.2s;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.background.dark};
  }

  :disabled {
    opacity: 0.6;
    border: none;

    :hover {
      text-decoration: none;
    }

    :active {
      background-color: ${({ theme }) => theme.colors.background.light};
    }
  }
`;
