import styled from "styled-components";
import { Img_Object } from "../../../assets/images";

function ToTop() {
  return (
    <TotalWrapper
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <img src={Img_Object.arrow} alt="" />
    </TotalWrapper>
  );
}

export default ToTop;

const TotalWrapper = styled.button`
  width: 60px;
  height: 60px;
  border: 2px solid ${({ theme }) => theme.colors.main.default};
  position: fixed;
  bottom: 60px;
  right: 48px;
  border-radius: 100px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0);
  background-color: ${({ theme }) => theme.colors.background.dark};
  opacity: 0.8;
  transition: 0.3s;
  cursor: pointer;
  > img {
    position: absolute;
    transition: 0.3s;
    top: 19px;
    left: 21px;
  }
  :hover {
    opacity: 1;
    > img {
      transition: 0.3s;
      position: absolute;
      top: 15px;
      left: 21px;
    }
  }
  :active {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.background.light};
    > img {
      transition: 0.3s;
      position: absolute;
      top: 23px;
      left: 21px;
    }
  }
`;
