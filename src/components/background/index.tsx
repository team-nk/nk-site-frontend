import { ReactNode, useEffect } from "react";
import styled from "styled-components";

interface BackgroundProps {
  children: ReactNode;
}

function Background({ children }: BackgroundProps) {
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
      <ContentWrapper>{children}</ContentWrapper>
    </TotalWrapper>
  );
}

export default Background;

const TotalWrapper = styled.div`
  max-width: 100%;
  min-width: 1420px;
  height: 5080px;
  position: relative;
  top: 0px;
  background-color: ${({ theme }) => theme.colors.background.default};
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;

const RowLineWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
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
  height: 100%;
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
