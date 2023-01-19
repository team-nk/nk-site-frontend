import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  heigth?: number | string;
  title: string;
  description?: Array<TextAreaArray>;
}

export interface TextAreaArray {
  text: string;
}

function AnswerTextArea({ description, title, ...props }: Props) {
  return (
    <Wrapper>
      <QuestionText>{title}</QuestionText>
      {description && (
        <DescriptionWrapper>
          {description.map((item) => (
            <DescriptionText>{item.text}</DescriptionText>
          ))}
        </DescriptionWrapper>
      )}
      <AnswerInputText {...props} />
    </Wrapper>
  );
}

export default AnswerTextArea;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionText = styled.h1`
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  ${({ theme }) => theme.fontSizes.subTitle}
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  ${({ theme }) => theme.fontSizes.body1}
`;

const AnswerInputText = styled.textarea<{ height?: number | string }>`
  width: 860px;
  height: ${({ height }) => (height ? `${height}px` : `200px`)};
  margin-top: 8px;
  padding: 16px 20px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.gray20};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  ${({ theme }) => theme.fontSizes.body1}
  outline: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray60};
    ${({ theme }) => theme.fontSizes.body1}
  }
`;
