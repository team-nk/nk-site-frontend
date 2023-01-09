import { ReactNode } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Img_Object } from "../../assets/images";
import ProfileBox from "../objects/profilebox";

interface Props {
  interface: ReactNode;
  data: any[]; //임시(팀원,프로젝트 데이터타입이 지정되어야 함)
  filter: string[];
}

function PageNation({}: Props) {
  return (
    <TotalWrapper>
      <CategoryWrapper>
        <Icon selected />
        <Icon />
        <Icon />
      </CategoryWrapper>
      <ContentWrapper>
        <ProfileBox />
        <ProfileBox />
        <ProfileBox />
        <ProfileBox />
      </ContentWrapper>
      <PageBar>
        <PageIcon type="left" />
        <PageIcon type="number" value={1} selected />
        <PageIcon type="right" disabled />
      </PageBar>
    </TotalWrapper>
  );
}

interface IconProps {
  selected?: boolean;
}

function Icon({ selected = false }: IconProps) {
  return (
    <CategoryIcon selected={selected} id={selected && "selected"}>
      <p>디자이너</p>
    </CategoryIcon>
  );
}

interface PageIconProps {
  type: "left" | "right" | "number";
  value?: number;
  disabled?: boolean;
  selected?: boolean;
}

function PageIcon({
  type,
  value,
  selected = false,
  disabled = false,
}: PageIconProps) {
  if (type == "number") {
    return (
      <PageNum id={selected && "selected"} selected={selected}>
        <p>{value}</p>
      </PageNum>
    );
  } else {
    return (
      <ArrowWrapper id={disabled && "disabled"} disabled={disabled}>
        <img id={type} src={Img_Object.pagearrow} alt="" />
      </ArrowWrapper>
    );
  }
}

export default PageNation;

const TotalWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryWrapper = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: row;
`;

const CategoryIcon = styled.button<{ selected: boolean }>`
  width: 142px;
  height: 58px;
  border-radius: 29px;
  background-color: ${({ theme }) => theme.colors.background.dark};
  ${({ theme, selected }) =>
    selected ? theme.fontSizes.nav2 : theme.fontSizes.nav1};
  color: ${({ theme }) => theme.colors.grayscale.gray20};
  width: fit-content;
  padding: 0 28px;
  border: 0px;
  border: ${({ theme, selected }) =>
    selected && "1.5px solid " + theme.colors.main.default};
  :focus {
    outline: none;
  }
  p {
    transition: 0.2s;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0);
  }
  :hover:not(#selected) p {
    transition: 0.2s;
    border-color: ${({ theme }) => theme.colors.grayscale.gray20};
  }
`;

const ContentWrapper = styled.div`
  width: 1124px;
  border: 1px solid black;
  margin-top: 32px;
  gap: 72px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const PageBar = styled.div`
  width: fit-content;
  height: 52px;
  gap: 8px;
  margin-top: 100px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: row;
`;

const ArrowWrapper = styled.button<{ disabled: boolean }>`
  width: 52px;
  height: 52px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => disabled && 0.3};
  > img {
    transition: 0.2s;
  }
  :hover:not(#disabled) img {
    padding-right: 10px;
    transition: 0.2s;
  }
  :active:not(#disabled) img {
    transition: 0.2s;
    padding: 0;
    padding-left: 10px;
    opacity: 0.5;
  }
  #right {
    transform: rotate(180deg);
  }
`;

const PageNum = styled.div<{ selected: boolean }>`
  width: 52px;
  height: 52px;
  ${({ theme }) => theme.fontSizes.nav1};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.point.default : theme.colors.grayscale.gray0};
  background-color: ${({ theme, selected }) =>
    selected && theme.colors.background.dark};
  border-radius: 16px;
  border: ${({ theme, selected }) =>
    selected && "1px solid " + theme.colors.point.default};
  > p {
    width: fit-content;
    transition: 0.2s;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0);
  }
  :hover:not(#selected) p {
    border-color: ${({ theme }) => theme.colors.grayscale.gray0};
  }
`;
