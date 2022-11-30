import styled from "styled-components";
import { Img_Header } from "../../../assets/images";

interface Props {
  title: string;
  value: number;
}

function CountBox({ title, value }: Props) {
  return (
    <TotalWrapper>
      <TextBox>
        <h1>{title}</h1>
        <div>
          <p>
            <img src={Img_Header.SelectIcon} alt="" />
            {value} 명
          </p>
        </div>
      </TextBox>
      <BackBox />
    </TotalWrapper>
  );
}

export default CountBox;

const TotalWrapper = styled.div`
  width: 348px;
  height: 268px;
  position: relative;
`;

const BackBox = styled.div`
  width: 340px;
  height: 260px;
  position: absolute;
  z-index: 1;
  bottom: 0px;
  left: 0px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.main.default};
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.main.default};
  background-color: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  width: 340px;
  height: 260px;
  position: absolute;
  z-index: 2;
  top: 0px;
  right: 0px;

  > h1 {
    ${({ theme }) => theme.fontSizes.title};
    margin-bottom: 32px;
  }
  > div p {
    font-weight: 600;
    font-size: 50px;
    line-height: 50px;
    position: relative;
  }
  > div img {
    position: absolute;
    left: -6px;
    bottom: -1px;
    z-index: -1;
  }
`;
