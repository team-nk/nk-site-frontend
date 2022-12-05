import styled from "styled-components";
import { Img_Main } from "../../assets/images";

function TitleEN() {
  return (
    <TotalWrapper id="page-2">
      <img src={Img_Main.bannerAni2} alt="" />
      <ContentWrapper>
        <div />
        <div id="text-wrapper">
          <Title>
            We Are NK, <br />
            We Are Necessary geeK
          </Title>
          <SubTitle>NK는 세상이 필요로 하는 Geek이 되고자 합니다</SubTitle>
        </div>
      </ContentWrapper>
    </TotalWrapper>
  );
}

export default TitleEN;

const TotalWrapper = styled.div`
  position: relative;
  z-index: 1;
  scroll-snap-align: center;
  width: 100%;
  height: 1000px;
  background-color: ${({ theme }) => theme.colors.background.dark};
  background-color: rgba(0, 0, 0, 0.456);
  backdrop-filter: blur(1.5px) brightness(2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    position: absolute;
    left: 0px;
  }
`;

const ContentWrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  > #text-wrapper {
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fontSizes.sectionTitle};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  margin-top: 20px;
  text-align: right;
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fontSizes.subTitle};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  margin-top: 40px;
  text-align: right;
`;
