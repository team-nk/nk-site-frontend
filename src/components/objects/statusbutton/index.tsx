import styled from "styled-components";

interface Props {
  value: string;
}

function StatusButton({ value }: Props) {
  return (
    <TotalWrapper>
      <TextBox>
        <p>{value}</p>
      </TextBox>
      <BackBox />
    </TotalWrapper>
  );
}

export default StatusButton;

const TotalWrapper = styled.div`
  width: fit-content;
  height: 36px;
  position: relative;
`;

const BackBox = styled.div`
  width: 100%;
  height: 32px;
  position: absolute;
  z-index: 1;
  bottom: -4px;
  left: -2px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.point.default};
`;

const TextBox = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.point.default};
  background-color: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.point.default};
  ${({ theme }) => theme.fontSizes.body1};
  width: fit-content;
  height: 32px;
  position: relative;
  z-index: 2;
  top: 0px;
  right: 0px;
`;
