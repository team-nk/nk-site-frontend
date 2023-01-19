import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  title: string;
}

function AnswerInput({ title, type = "text", ...props }: Props) {
  return (
    <Wrapper>
      <QuestionText>{title}</QuestionText>
      <AnswerInputText type={type} {...props} />
    </Wrapper>
  );
}

export default AnswerInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionText = styled.h1`
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  ${({ theme }) => theme.fontSizes.subTitle}
`;

const AnswerInputText = styled.input<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : `420px`)};
  height: 56px;
  padding: 16px 20px;
  box-sizing: border-box;
  outline: none;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.gray20};
  background-color: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  ${({ theme }) => theme.fontSizes.body1}

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray60};
    ${({ theme }) => theme.fontSizes.body1}
  }
`;
