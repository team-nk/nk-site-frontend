import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NormalButton from "../common/button/NormalButton";

interface BtnProps {
  focusBtn: boolean;
  disabled: boolean;
}

function ApplyLast() {
  const [btnState, setBtnState] = useState<BtnProps>({
    focusBtn: true,
    disabled: false,
  });

  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };

  return (
    <TotalWrapper>
      <TextContainer>
        <h1>Apply to NK</h1>
      </TextContainer>
      <ContentContainer>
        <MainWrapper>
          <MainContentText>NK 2기 지원이 완료되었습니다!</MainContentText>
          <MainContentText>좋은 결과 있길 바랄게요 :)</MainContentText>
        </MainWrapper>
        <SubWrapper>
          <SubContentText>
            지원서 확인 후, 일주일 내에 제출해주신 연락처로 연락을 드릴
            예정입니다.
          </SubContentText>
          <SubContentText>
            문의 내용은 인스타그램 @team_._nk로 DM 남겨주세요.
          </SubContentText>
        </SubWrapper>
      </ContentContainer>
      <ButtonContainer>
        <NormalButton
          onClick={onClickHome}
          disabled={btnState.disabled}
          focus={btnState.focusBtn}
          value="홈으로"
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

const ContentContainer = styled.div``;

const MainWrapper = styled.div`
  margin-top: 180px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

const MainContentText = styled.h1`
  ${({ theme }) => theme.fontSizes.sectionTitle}
  color: ${({ theme }) => theme.colors.grayscale.gray0};
  text-align: center;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

const SubContentText = styled.p`
  ${({ theme }) => theme.fontSizes.subTitle}
  color: ${({ theme }) => theme.colors.grayscale.gray0};
  text-align: center;
`;

const ButtonContainer = styled.div`
  z-index: 3;
  margin-bottom: 262px;
`;

export default ApplyLast;
