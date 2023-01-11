import { useState } from "react";
import styled from "styled-components";

function ApplyPosition() {
  return (
    <TotalWrapper>
      <TextContainer>
        <h1>Apply to NK</h1>
      </TextContainer>
      <SelectContainer>
        <SelectForm>
          <QuestionText>1. 지원하시는 포지션이 무엇인가요?</QuestionText>
          <SelectItemContainer>
            <SelectItem />
          </SelectItemContainer>
        </SelectForm>
      </SelectContainer>
    </TotalWrapper>
  );
}

export default ApplyPosition;

function SelectItem() {
  return (
    <SelectWrapper>
      <SelectCircle>
        <CheckSelectCircle />
      </SelectCircle>
      <CategoryText>항목 텍스트</CategoryText>
    </SelectWrapper>
  );
}

const TotalWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 260px;
`;

const TextContainer = styled.div`
  z-index: 1;

  > h1 {
    margin-top: 150px;
    ${({ theme }) => theme.fontSizes.sectionTitle}
    color: ${({ theme }) => theme.colors.grayscale.gray20};
    text-align: center;
  }
`;

const SelectContainer = styled.div`
  z-index: 3;
  margin-top: 80px;
`;

const SelectForm = styled.div`
  padding: 20px 20px;
  width: 940px;
  height: 434px;
  border: 1px solid ${({ theme }) => theme.colors.main.default};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background.dark};
`;

const QuestionText = styled.p`
  ${({ theme }) => theme.fontSizes.subTitle}
  color: ${({ theme }) => theme.colors.grayscale.gray0};
  margin-bottom: 24px;
`;

const SelectItemContainer = styled.div``;

const SelectWrapper = styled.div`
  width: 900px;
  height: 50px;
  display: flex;
  border-radius: 8px;
  padding: 16px 19px;

  :hover {
    background-color: ${({ theme }) => theme.colors.main.default};

    > p {
      text-decoration: underline;
    }
  }
`;

const SelectCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.gray20};
  border-radius: 100%;
  margin-right: 19px;
`;

const CheckSelectCircle = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray20};
  border: 1px solid ${({ theme }) => theme.colors.grayscale.gray20};
  border-radius: 100%;
`;

const CategoryText = styled.p`
  ${({ theme }) => theme.fontSizes.nav1}
  color: ${({ theme }) => theme.colors.grayscale.gray20};
`;
