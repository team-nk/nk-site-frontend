import { useState } from "react";
import styled from "styled-components";
import { vector } from "../../../assets/images/objects";

interface OptionArrType {
  value: number;
}

interface Props {
  options: Array<OptionArrType>;
  value: string;
  onChangeValue: (value: string) => void;
}

function DropDown({ onChangeValue, options, value }: Props) {
  const [isFold, setIsFold] = useState<boolean>(false);

  return (
    <Wrapper>
      <TitleValue>1</TitleValue>
      <img src={vector} alt=">" />
    </Wrapper>
  );
}

export default DropDown;

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 56px;
  padding: 0 13px 0 32px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.gray20};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background.dark};

  :hover {
    background-color: ${({ theme }) => theme.colors.background.light};
    > p {
      text-decoration: underline;
    }
  }
`;

const TitleValue = styled.p`
  ${({ theme }) => theme.fontSizes.body1}
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  margin-right: 31px;
`;
