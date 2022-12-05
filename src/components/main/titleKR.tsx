import styled from "styled-components";
import { Img_Main } from "../../assets/images";
import StatusButton from "../objects/statusbutton";

function TitleKR() {
  return (
    <TotalWrapper id="page-1">
      <ContentWrapper>
        <div id="text-wrapper">
          <StatusButton value="지금은 모집 중이 아니에요 zzZ" />
          <Title>
            우리가 필요한 세상,
            <br />
            우리를 필요로 하는 세상
          </Title>
          <SubTitle>고등학생 IT 동아리 NK</SubTitle>
        </div>
        <img src={Img_Main.bannerAni1} alt="" />
      </ContentWrapper>
    </TotalWrapper>
  );
}

export default TitleKR;

const TotalWrapper = styled.div`
  position: relative;
  z-index: 1;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  width: 100%;
  height: 1000px;
  background-color: ${({ theme }) => theme.colors.background.dark};
  background-color: rgba(3, 1, 17, 0.2);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    z-index: 0;
    right: -420px;
  }
  #text-wrapper {
    position: absolute;
    z-index: 2;
  }
`;
const ContentWrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fontSizes.sectionTitle};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  margin-top: 20px;
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fontSizes.subTitle};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  margin-top: 40px;
`;
