import styled from "styled-components";

function NewApply() {
  return (
    <TotalWrapper>
      <TextContainer>
        <h1>Apply to NK</h1>
        <p>NK에서 다양한 경험을 해봐요</p>
      </TextContainer>
    </TotalWrapper>
  );
}

export default NewApply;

const TotalWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    margin-top: 60px;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.grayscale.gray20};
    text-align: center;
  }

  > p {
    font-style: normal;
    margin-top: 32px;
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.grayscale.gray20};
    text-align: center;
  }
`;
