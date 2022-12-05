import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Img_Header } from "../../assets/images";

function Header() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const link = [
    ["홈", "/"],
    ["팀원", "/team"],
    ["프로젝트", "/project"],
    ["FAQ", "/faq"],
    ["지원하기", "/apply"],
  ];
  return (
    <TotalWrapper>
      <ContentWrapper id="content">
        <img src={Img_Header.Logo} alt="" />
        <div id="link-wrapper">
          {link.map((value) => (
            <LinkTo
              name={value[0]}
              selected={location == value[1]}
              onClick={() => {
                navigate(value[1]);
              }}
            />
          ))}
        </div>
      </ContentWrapper>
    </TotalWrapper>
  );
}

export default Header;

interface LinkProps {
  name: string;
  onClick: () => void;
  selected?: boolean;
}

function LinkTo({ name, onClick, selected }: LinkProps) {
  return (
    <LinkWrapper onClick={onClick}>
      <LinkText style={{ fontWeight: selected && "bold" }}>{name}</LinkText>
      {!selected && <img id="hover-img" src={Img_Header.HoverIcon} alt="" />}
      <Selected
        show={selected}
        id="select-img"
        src={Img_Header.SelectIcon}
        alt=""
      />
    </LinkWrapper>
  );
}

const TotalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  height: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(3, 1, 17, 0.8);
  z-index: 999;
`;

const ContentWrapper = styled.div`
  width: 1420px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > #link-wrapper {
    width: 536px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LinkWrapper = styled.div`
  position: relative;
  cursor: pointer;
  > img {
    position: absolute;
  }
  > #hover-img {
    transition: 0.5s;
    transform: rotate(45deg);
    bottom: 35px;
    left: 13px;
    width: 10px;
    opacity: 0;
  }
  :hover > #hover-img {
    left: 20px;
    bottom: 26px;
    transform: rotate(0deg);
    opacity: 1;
  }
`;

const LinkText = styled.p`
  ${({ theme }) => theme.fontSizes.nav1};
  color: ${({ theme }) => theme.colors.grayscale.gray0};
  margin: 32px 20px;
  position: relative;
  opacity: 2;
  z-index: 1;
`;

const Selected = styled.img<{ show: boolean }>`
  left: 5px;
  bottom: 25px;
  transition: 0.3s;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;
