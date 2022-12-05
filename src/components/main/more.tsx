import styled from "styled-components";
import MoreButton from "../objects/morebutton";

function More() {
  return (
    <TotalWrapper id="page-5">
      <ContentWrapper>
        <h1>NK 더 알아보기</h1>
        <div id="button-wrapper">
          <MoreButton value="팀원" />
          <MoreButton value="프로젝트" />
          <MoreButton value="FAQ" />
        </div>
      </ContentWrapper>
    </TotalWrapper>
  );
}

export default More;

const TotalWrapper = styled.div`
  position: relative;
  z-index: 1;
  scroll-snap-align: end;
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > h1 {
    ${({ theme }) => theme.fontSizes.title};
    color: ${({ theme }) => theme.colors.grayscale.gray20};
    margin-bottom: 60px;
  }
  > #button-wrapper {
    display: flex;
    flex-direction: row;
    width: 700px;
    justify-content: space-between;
  }
`;
