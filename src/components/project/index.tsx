import styled from "styled-components";
import PageNation from "../pagenation";

function ProjectPage() {
  return (
    <TotalWrapper>
      <Title>Our Projects</Title>
      <SubTitle>NK가 함께 만들어간 프로젝트입니다</SubTitle>
      <PageNation data={[]} interface={<></>} filter={[]} />
    </TotalWrapper>
  );
}

export default ProjectPage;

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
