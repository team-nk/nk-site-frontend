import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { LoaderTargetPlugin } from "webpack";
import PageNation from "../pagenation";

function FAQPage() {
  return (
    <TotalWrapper>
      <Title>FAQ</Title>
      <SubTitle>자주 묻는 질문에 대한 NK의 답변입니다</SubTitle>
      <ToggleContainer>
        <Toggle />
      </ToggleContainer>
    </TotalWrapper>
  );
}

export default FAQPage;

function Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleWrap id={toggle && "toggle"}>
      <ToggleWrapper onClick={() => setToggle(!toggle)}>
        <ToggleTitle>Q. </ToggleTitle>
      </ToggleWrapper>
      <ToggleText id="text" className={toggle && "toggle"}>
        <p>
          <h2>A.</h2>
          질문에 대한
          <br />
          asdf
          <br />
        </p>
      </ToggleText>
    </ToggleWrap>
  );
}

const boxClose = keyframes`
  80% {
    padding-top:0px;
  }
  100% {
    padding-top:10px;
  }
`;
const boxOpen = keyframes`
  80% {
    padding-top: 96px;
  }
  100% {
    padding-top: 90px;
  }
`;

const ToggleWrap = styled.div`
  position: relative;
  width: 1180px;
  height: 70px;
  margin-bottom: 130px;

  .toggle {
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-name: ${boxOpen};
    > p {
      height: 78px;
      opacity: 1;
    }
  }
  :not(#toggle) {
    > div {
      animation-duration: 3s;
      animation-fill-mode: forwards;
      animation-name: ${boxClose};
      > p {
        height: 67px;
        opacity: 0;
      }
    }
  }
`;

const TotalWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 82px;
  padding-bottom: 260px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  ${({ theme }) => theme.fontSizes.sectionTitle};
  margin-top: 60px;
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  ${({ theme }) => theme.fontSizes.subTitle};
  margin-top: 32px;
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const ToggleWrapper = styled.div`
  position: absolute;
`;

const ToggleTitle = styled.h1`
  box-sizing: border-box;
  width: 1180px;
  height: 70px;
  position: absolute;
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  ${({ theme }) => theme.fontSizes.subTitle};
  background-color: ${({ theme }) => theme.colors.background.light};
  border: 1.5px solid ${({ theme }) => theme.colors.main.default};
  border-radius: 8px;
  top: -1px;
  left: -2px;
  padding: 20px 40px;
  z-index: 1;
`;

const ToggleText = styled.div`
  position: absolute;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 40px;
  padding-bottom: 24px;
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  background-color: ${({ theme }) => theme.colors.background.dark};
  width: 1180px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.main.default};
  border-left: 4px solid ${({ theme }) => theme.colors.main.default};
  border-top: 1px solid ${({ theme }) => theme.colors.main.default};
  border-radius: 8px;
  box-sizing: border-box;
  animation-iteration-count: 1;
  left: -4px;
  h2 {
    align-self: flex-start;
    ${({ theme }) => theme.fontSizes.subTitle};
    margin-right: 6px;
    padding-bottom: 48px;
  }
  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    flex-direction: row;
  }
`;
