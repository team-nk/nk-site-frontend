import { useState } from "react";
import styled from "styled-components";
import NormalButton from "../common/button/NormalButton";

interface SelectProps {
  checkState: boolean;
  onClick: () => void;
  positionText: string;
}

interface BtnProps {
  check: boolean;
  cur: number;
  focusBtn: boolean;
  disabled: boolean;
}

function ApplyPosition() {
  const [btnState, setBtnState] = useState<BtnProps>({
    check: false,
    cur: 0,
    focusBtn: false,
    disabled: true,
  });

  const PositionDermy = [
    {
      name: "기획·PM",
    },
    {
      name: "디자이너",
    },
    {
      name: "프론트엔드 개발자",
    },
    {
      name: "백엔드 개발자",
    },
    {
      name: "Android 개발자",
    },
    {
      name: "iOS 개발자",
    },
  ];

  const onClickSelectItem = (num: number) => {
    setBtnState({
      check: !btnState.check,
      cur: num,
      focusBtn: true,
      disabled: false,
    });
  };

  return (
    <TotalWrapper>
      <TextContainer>
        <h1>Apply to NK</h1>
      </TextContainer>
      <SelectContainer>
        <SelectForm>
          <QuestionText>1. 지원하시는 포지션이 무엇인가요?</QuestionText>
          <SelectItemContainer>
            {PositionDermy.map((item, idx) => (
              <SelectItem
                key={idx}
                positionText={item.name}
                onClick={() => onClickSelectItem((idx + 1) * 6)}
                checkState={(idx + 1) * 6 === btnState.cur}
              />
            ))}
          </SelectItemContainer>
        </SelectForm>
      </SelectContainer>
      <ButtonContainer>
        <NormalButton value="이전" />
        <NormalButton
          disabled={btnState.disabled}
          focus={btnState.focusBtn}
          value="다음(1/3)"
        />
      </ButtonContainer>
    </TotalWrapper>
  );
}

export default ApplyPosition;

function SelectItem({ positionText, checkState, onClick }: SelectProps) {
  return (
    <SelectWrapper onClick={onClick} check={checkState}>
      <SelectCircle>{checkState && <CheckSelectCircle />}</SelectCircle>
      <CategoryText>{positionText}</CategoryText>
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

const SelectWrapper = styled.div<{ check: boolean }>`
  width: 900px;
  height: 50px;
  display: flex;
  border-radius: 8px;
  padding: 16px 19px;

  background-color: ${({ check, theme }) =>
    check ? "rgba(27, 241, 255, 0.2)" : theme.colors.background.dark};

  :hover {
    background-color: ${({ check }) => !check && "rgba(204, 0, 255, 0.2)"};

    > p {
      text-decoration: ${({ check }) => !check && "underline"};
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

const ButtonContainer = styled.div`
  z-index: 3;
  margin-top: 52px;
  margin-bottom: 156px;
`;
