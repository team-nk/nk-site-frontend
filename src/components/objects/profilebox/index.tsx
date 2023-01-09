import styled from "styled-components";

function ProfileBox() {
  return (
    <TotalWrapper>
      <ImageBox />
      <DesciptBox>
        <TitleWrapper>
          <p>1기 ·</p>
          <h1>이경수</h1>
          <h2>프론트엔드 개발자</h2>
        </TitleWrapper>
        <p>justinlee05@naver.com</p>
        <h3>나는야 노가다 장인</h3>
        <LinkBox></LinkBox>
      </DesciptBox>
    </TotalWrapper>
  );
}

export default ProfileBox;

const TotalWrapper = styled.div`
  width: 340px;
  height: 540px;
`;

const ImageBox = styled.div`
  width: 340px;
  height: 340px;
  border-width: 0px 0px 4px 4px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.main.default};
  border-radius: 16px;
`;

const DesciptBox = styled.div`
  width: 340px;
  height: 200px;
  border-width: 0px 0px 4px 4px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.point.default};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background.dark};
  padding: 24px 28px;
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  position: relative;
  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grayscale.gray40};
    margin-top: 4px;
    margin-bottom: 12px;
  }
  > h3 {
    ${({ theme }) => theme.fontSizes.body1};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  > p {
    ${({ theme }) => theme.fontSizes.small};
  }
  > h1 {
    ${({ theme }) => theme.fontSizes.title};
  }
  > h2 {
    ${({ theme }) => theme.fontSizes.nav2};
  }
`;

const LinkBox = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  border: 1px solid red;
  position: absolute;
  bottom: 28px;
  left: 24px;
`;
