import styled from "styled-components";
import CountBox from "../objects/countbox";

function Count() {
  return (
    <TotalWrapper id="page-3">
      <ContentWrapper>
        <Title>
          마음껏 재능을 펼치는 자신감과
          <br />더 나아갈 수 있도록 노력하는 열정
        </Title>
        <SubTitle>NK는 지금까지 이만큼 해냈어요</SubTitle>
        <BoxWrapper>
          <CountBox title="진행한 프로젝트 수" value={1} />
          <CountBox title="팀원 수" value={1} />
          <CountBox title="팀 졸업생 수" value={1} />
        </BoxWrapper>
      </ContentWrapper>
    </TotalWrapper>
  );
}

export default Count;

const TotalWrapper = styled.div`
  position: relative;
  z-index: 1;
  scroll-snap-align: center;
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
`;

const Title = styled.h1`
  text-align: center;
  ${({ theme }) => theme.fontSizes.sectionTitle};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
`;

const SubTitle = styled.h2`
  text-align: center;
  ${({ theme }) => theme.fontSizes.subTitle};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  margin-top: 40px;
  margin-bottom: 60px;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1080px;
`;
