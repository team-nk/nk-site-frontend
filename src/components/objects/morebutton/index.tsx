import styled from "styled-components";

interface Props {
  value: string;
}

function MoreButton({ value }: Props) {
  return (
    <ButtonCover>
      <Button>
        <p>{value}</p>
      </Button>
      <ButtonBackground>
        <div id="slide" />
      </ButtonBackground>
    </ButtonCover>
  );
}
export default MoreButton;

const ButtonCover = styled.div`
  width: 220px;
  height: 150px;
  position: relative;
  cursor: pointer;

  :hover #slide {
    width: 100%;
    transition: 0.25s;
  }
`;

const Button = styled.button`
  width: 220px;
  height: 140px;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.main.default};
  background-color: ${({ theme }) => theme.colors.background.dark};
  z-index: 1;
  ${({ theme }) => theme.fontSizes.subTitle};
  color: ${({ theme }) => theme.colors.grayscale.gray0};
  cursor: pointer;
  :active {
    background-color: ${({ theme }) => theme.colors.background.light};
  }
`;

const ButtonBackground = styled.div`
  width: 210px;
  height: 133px;
  position: absolute;
  bottom: 0px;
  left: 5px;
  border: 1px solid ${({ theme }) => theme.colors.main.default};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background.dark};
  overflow: hidden;
  > #slide {
    background-color: ${({ theme }) => theme.colors.main.default};
    width: 0%;
    height: 100%;
    transition: 0.25s;
  }
`;
