import styled from "styled-components";
import { Img_Footer } from "../../assets/images";

function Footer() {
  return (
    <TotalWrapper>
      <ContentWrapper>
        <LinkWrapper>
          <Icon src={Img_Footer.Instagram} />
          <Icon src={Img_Footer.Facebook} />
          <Icon src={Img_Footer.Notion} />
        </LinkWrapper>
        <img src={Img_Footer.Logo} alt="" />
        <p>
          Contact | NecessarygeeK@NK.hs.kr
          <br />ⓒ 2022. NK All rights reserved.
        </p>
      </ContentWrapper>
    </TotalWrapper>
  );
}

interface IconProps {
  src: string;
  href?: string;
}
const Icon = ({ src, href }: IconProps) => {
  return (
    <IconWrapper href={href}>
      <img src={src} alt="" />
    </IconWrapper>
  );
};

export default Footer;

const IconWrapper = styled.a`
  cursor: pointer;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;

const TotalWrapper = styled.div`
  width: 100%;
  height: 260px;
  margin-top: -260px;
  position: absolute;
  top: 5000px;
  z-index: 900;
  background-color: rgba(3, 1, 17, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    ${({ theme }) => theme.fontSizes.body1};
    color: ${({ theme }) => theme.colors.grayscale.gray20};
    text-align: center;
    opacity: 0.8;
  }
  > img {
    opacity: 0.8;
  }
`;

const LinkWrapper = styled.div`
  width: 144px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
