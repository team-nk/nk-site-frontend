import { ReactNode, useEffect } from "react";
import styled from "styled-components";
import Footer from "../footer";

interface BackgroundProps {}

function Background({}: BackgroundProps) {
  const rowCnt = 63;
  const colCnt = 75;

  return (
    <TotalWrapper>
      <RowLineWrapper>
        {Array(rowCnt)
          .fill(0)
          .map(() => (
            <RowLine />
          ))}
      </RowLineWrapper>
      <ColLineWrapper>
        {Array(colCnt)
          .fill(0)
          .map(() => (
            <ColLine />
          ))}
      </ColLineWrapper>
    </TotalWrapper>
  );
}

export default Background;

const TotalWrapper = styled.div`
  min-width: 1420px;
  width: 100%;
  height: 5000px;
  position: absolute;
  overflow: hidden;
  top: 0px;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

const RowLineWrapper = styled.div`
  width: 100%;
  height: 5000px;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const RowLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main.default};
  margin-bottom: 80px;
  opacity: 0.5;
`;

const ColLineWrapper = styled.div`
  width: 100%;
  height: 5000px;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  padding-left: 40px;
`;

const ColLine = styled.div`
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.main.default};
  margin-right: 80px;
  opacity: 0.5;
`;
