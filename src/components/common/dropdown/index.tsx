import { useState, useMemo } from "react";
import styled from "styled-components";
import { vector } from "../../../assets/images/objects";
import { DropDownProps, OptionArrType } from "../../../interface/common";

function DropDown({ onChangeValue, options, value }: DropDownProps) {
  const [isFold, setIsFold] = useState<boolean>(false);

  const onClickOption = (clickedOption: string) => {
    onChangeValue(clickedOption);
    setIsFold(false);
  };

  const selectedValue = useMemo(() => {
    const index = options.findIndex((i: OptionArrType) => i.value === value);
    if (index === -1) return value;
    return options[index].option;
  }, [value]);

  return (
    <Wrapper>
      <label onClick={() => setIsFold(!isFold)}>
        <TitleValue>{selectedValue}</TitleValue>
        <ArrowImg isFold={isFold} src={vector} alt=">" />
      </label>
      {isFold && (
        <ListWrapper>
          {options.map((item, idx) => (
            <ListOptionBox key={idx} onClick={() => onClickOption(item.value)}>
              {item.value}
            </ListOptionBox>
          ))}
        </ListWrapper>
      )}
    </Wrapper>
  );
}

export default DropDown;

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 56px;

  > label {
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
  }
`;

const TitleValue = styled.p`
  ${({ theme }) => theme.fontSizes.body1}
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  margin-right: 31px;
`;

const ArrowImg = styled.img<{ isFold: boolean }>`
  transition: all ease 200ms;
  transform: rotate(${(props) => (props.isFold ? "180" : "0")}deg);
`;

const ListWrapper = styled.div`
  position: absolute;
  top: 56px;
  right: 0;
  z-index: 99;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.background.light};
`;

const ListOptionBox = styled.div`
  width: 100%;
  height: 56px;
  padding: 16px 60px 16px 32px;
  ${({ theme }) => theme.fontSizes.body1}
  color: ${({ theme }) => theme.colors.grayscale.gray20};

  :hover {
    background-color: ${({ theme }) => theme.colors.background.default};
    text-decoration: underline;
  }
`;
