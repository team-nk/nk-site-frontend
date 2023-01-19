import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NormalButton from "../common/button/NormalButton";
import AnswerInput from "../common/question/AnswerInput";
import AnswerTextArea, {
  TextAreaArray,
} from "../common/question/AnswerTextArea";
import { useRecoilState } from "recoil";
import { applyInfoState } from "../../store/atom";

interface BtnProps {
  focusBtn: boolean;
  disabled: boolean;
}

const Description: TextAreaArray[] = [
  { text: "* 최대 5개" },
  { text: "* 기여도 작성 필수" },
  {
    text: "* Notion, GitHub, Play Store, App Store 등 작품을 확인할 수 있는 자료의 URL 첨부 ",
  },
];

function ApplyMotive() {
  const [applyState, setApplyState] = useRecoilState(applyInfoState);
  const [btnState, setBtnState] = useState<BtnProps>({
    focusBtn: false,
    disabled: true,
  });

  const navigate = useNavigate();

  const onClickBefore = () => {
    navigate("/apply/motive");
  };

  const onClickNext = () => {
    navigate("/apply/last");
  };

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setApplyState({ ...applyState, [name]: value });
    if (
      applyState.reasonApplyNK === "" ||
      applyState.togetherProject === "" ||
      applyState.participating === "" ||
      applyState.skill === "" ||
      applyState.portfolio === ""
    ) {
      setBtnState({ ...btnState, disabled: true });
    } else {
      setBtnState({ ...btnState, disabled: false });
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setApplyState({ ...applyState, [name]: value });
    if (
      applyState.reasonApplyNK === "" ||
      applyState.togetherProject === "" ||
      applyState.participating === "" ||
      applyState.skill === "" ||
      applyState.portfolio === ""
    ) {
      setBtnState({ ...btnState, disabled: true });
    } else {
      setBtnState({ ...btnState, disabled: false });
    }
  };

  return (
    <TotalWrapper>
      <TextContainer>
        <h1>Apply to NK</h1>
      </TextContainer>
      <InputContainer>
        <AnswerTextArea
          name="reasonApplyNK"
          onChange={onChangeTextArea}
          title="8. NK에 지원하신 동기가 무엇인가요? (최대 1000자)"
          placeholder="입력하세요"
          maxLength={1000}
        />
        <AnswerTextArea
          name="togetherProject"
          onChange={onChangeTextArea}
          title="9. NK에서 어떤 프로젝트를 함께 하고 싶으신가요? (최대 1000자)"
          placeholder="입력하세요"
          maxLength={1000}
        />
        <AnswerTextArea
          name="participating"
          onChange={onChangeTextArea}
          title="10. 지원하시는 포지션으로 참여한 프로젝트를 작성해주세요."
          description={Description}
          placeholder="예:
          1. [NK Chat]
          NK 팀 내부에서 소통을 위해 사용하는 채팅 서비스
          Notion- https://notion.site/NK-Chat-a1b2c3d4e5f6g7h8
          Play Store- https://play.google.com/store/apps/details?id=NK.Chat&hl=ko&gl=US
          
          2. [NK Photo] …"
          maxLength={1000}
        />
        <AnswerInput
          name="skill"
          onChange={onChangeInput}
          title="11. 기술 스택을 알려주세요."
          width={860}
          placeholder="입력하세요"
        />
        <AnswerTextArea
          name="portfolio"
          onChange={onChangeTextArea}
          title="12. 자신을 표현한 포트폴리오가 있다면 입력해주세요. (필수X)"
          placeholder="입력하세요"
          height={100}
        />
      </InputContainer>
      <ButtonContainer>
        <NormalButton onClick={onClickBefore} value="이전" />
        <NormalButton
          onClick={onClickNext}
          disabled={btnState.disabled}
          focus={btnState.focusBtn}
          value="다음(3/3)"
        />
      </ButtonContainer>
    </TotalWrapper>
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 2;
  margin-top: 60px;
  width: 940px;
  height: 1241px;
  padding: 32px 40px;
  border: 1.5px solid ${({ theme }) => theme.colors.main.default};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background.dark};
`;

const ButtonContainer = styled.div`
  z-index: 3;
  margin-top: 52px;
  margin-bottom: 156px;
  width: 940px;
  display: flex;
  justify-content: space-between;
`;

export default ApplyMotive;
