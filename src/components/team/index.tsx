import styled from "styled-components";
import PageNation from "../pagenation";

function TeamPage() {
  return (
    <TotalWrapper>
      <Title>We Are NK</Title>
      <SubTitle>NK에서 함께하는 팀원들을 소개합니다</SubTitle>
      <PageNation data={[]} interface={<></>} filter={[]} />
    </TotalWrapper>
  );
}

export default TeamPage;

const TotalWrapper = styled.div`
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
