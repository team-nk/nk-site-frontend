import styled from "styled-components";
import NormalButton from "../common/button/NormalButton";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AnswerInput from "../common/question/AnswerInput";
import DropDown from "../common/dropdown";

interface BtnProps {
  focusBtn: boolean;
  disabled: boolean;
}

function ApplyProfile() {
  const [btnState, setBtnState] = useState<BtnProps>({
    focusBtn: false,
    disabled: true,
  });

  const navigate = useNavigate();

  const onClickBefore = () => {
    navigate("/apply/position");
  };

  const onClickNext = () => {
    navigate("/apply/motive");
  };

  return (
    <TotalWrapper>
      <TextContainer>
        <h1>Apply to Nk</h1>
      </TextContainer>
      <InputContainer>
        <AnswerInput
          className="name"
          title="2. 지원자 분의 성함을 알려주세요."
          placeholder="2~4자"
          maxLength={4}
        />
        <AnswerInput
          className="e-mail"
          title="3. 이메일을 입력해주세요."
          placeholder="예: Necessary123@geeK.com"
        />
        <AnswerInput
          className="phone"
          title="4. 연락처를 입력해주세요."
          placeholder="000-0000-0000"
        />
        <AnswerInput
          className="school"
          title="5. 어느 학교에 재학 중이신가요?"
          placeholder="ㅇㅇ고등학교"
        />
        <QuestionDropdownContainer>
          <h1>6. 교내 학년을 선택해주세요.</h1>
          <DropDown />
        </QuestionDropdownContainer>
        <AnswerInput
          className="master"
          title="7. 전공이 무엇이신가요?"
          placeholder="ㅇㅇ과"
        />
      </InputContainer>
      <ButtonContainer>
        <NormalButton onClick={onClickBefore} value="이전" />
        <NormalButton
          onClick={onClickNext}
          disabled={btnState.disabled}
          focus={btnState.focusBtn}
          value="다음(2/3)"
        />
      </ButtonContainer>
    </TotalWrapper>
  );
}

export default ApplyProfile;

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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 2;
  margin-top: 60px;
  width: 940px;
  height: 828px;
  padding: 32px 40px;
  border: 1.5px solid ${({ theme }) => theme.colors.main.default};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background.dark};
`;

const QuestionDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.colors.grayscale.gray20};
    ${({ theme }) => theme.fontSizes.subTitle}
    margin-bottom: 8px;
  }
`;

const ButtonContainer = styled.div`
  z-index: 3;
  margin-top: 52px;
  margin-bottom: 156px;
  width: 940px;
  display: flex;
  justify-content: space-between;
`;
