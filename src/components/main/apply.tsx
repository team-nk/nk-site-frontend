import styled from "styled-components";
import { Img_Main } from "../../assets/images";

function Apply() {
  return (
    <TotalWrapper>
      <ContentWrapper>
        <h1>NK에서 다양한 경험을 함께 해봐요!</h1>
        <ButtonBox>
          <AniContainer>
            <p>NK 2기 지원하러 가기</p>
            <SlideBox id="slide" />
          </AniContainer>
          <BackgroundButton />
        </ButtonBox>
      </ContentWrapper>
    </TotalWrapper>
  );
}

export default Apply;

const TotalWrapper = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > h1 {
    ${({ theme }) => theme.fontSizes.sectionTitle};
    color: ${({ theme }) => theme.colors.grayscale.gray20};
  }
`;

const ButtonBox = styled.div`
  width: 452px;
  height: 72px;
  margin-top: 40px;
  position: relative;
  :hover #slide {
    left: 55px;
    transition: 0.2s;
  }
`;

const AniContainer = styled.button`
  :active #slide {
    background-color: ${({ theme }) => theme.colors.background.light};
    transition: 0s;
  }
  cursor: pointer;
  outline: none;
  border: none;
  position: absolute;
  top: 0px;
  left: 45px;
  width: 360px;
  height: calc(100% - 8px);
  background-color: ${({ theme }) => theme.colors.main.default};
  transform: skew(50deg);
  border-radius: 20px 0 20px 0 / 15px 0 15px 0;
  z-index: 1;
  overflow: hidden;
  > p {
    transform: skew(-50deg);
    width: 100%;
    position: absolute;
    top: calc(50% - 12px);
    text-align: center;
    z-index: 2;
    ${({ theme }) => theme.fontSizes.title};
    color: ${({ theme }) => theme.colors.grayscale.gray0};
  }
`;

const BackgroundButton = styled.div`
  position: absolute;
  bottom: 0px;
  left: 42px;
  width: 355px;
  height: calc(100% - 8px);
  background-color: ${({ theme }) => theme.colors.background.dark};
  border: 1px solid ${({ theme }) => theme.colors.main.default};
  transform: skew(50deg);
  border-radius: 20px 0 20px 0 / 15px 0 15px 0;
`;

const SlideBox = styled.div`
  width: 400px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.background.dark};
  transform: skew(-50deg) rotate(-50deg);
  position: absolute;
  top: -300px;
  left: -420px;
  transition: 0.2s;
`;
