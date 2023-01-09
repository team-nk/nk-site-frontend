import styled from "styled-components";

function NewApply() {
  return (
    <TotalWrapper>
      <TextContainer>
        <h1>Apply to NK</h1>
        <p>NK에서 다양한 경험을 해봐요</p>
      </TextContainer>
      <ButtonContainer>
        <AnimationContainer>
          <p>NK 2기 지원하기</p>
          <SlideBox id="slide" />
        </AnimationContainer>
        <CoverButton />
      </ButtonContainer>
    </TotalWrapper>
  );
}

export default NewApply;

const TotalWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    z-index: 4;
    margin-top: 150px;
    ${({ theme }) => theme.fontSizes.sectionTitle}
    color: ${({ theme }) => theme.colors.grayscale.gray20};
    text-align: center;
  }

  > p {
    z-index: 4;
    font-style: normal;
    margin-top: 32px;
    ${({ theme }) => theme.fontSizes.subTitle}
    color: ${({ theme }) => theme.colors.grayscale.gray20};
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  margin-top: 200px;

  :hover #slide {
    left: 0px;
    transition: 0.2s;
  }
`;

const AnimationContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  width: 360px;
  height: 140px;
  border: 1px solid ${({ theme }) => theme.colors.main.default};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background.dark};
  overflow: hidden;
  z-index: 2;

  > p {
    z-index: 3;
    ${({ theme }) => theme.fontSizes.title}
    color: ${({ theme }) => theme.colors.grayscale.gray0};
  }

  :active #slide {
    background-color: ${({ theme }) => theme.colors.background.light};
    transition: 0s;
  }
`;

const CoverButton = styled.div`
  position: absolute;
  top: 0px;
  left: 5px;
  z-index: -1;
  width: 352px;
  height: 146px;
  border: 1px solid ${({ theme }) => theme.colors.main.default};
  border-radius: 16px;
`;

const SlideBox = styled.div`
  width: 425px;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.main.default};
  position: absolute;
  top: -320px;
  left: -500px;
  transform: rotate(40deg);
  transition: 0.2s;
`;
