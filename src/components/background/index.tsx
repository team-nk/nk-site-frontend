import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../footer";

interface BackgroundProps {
  children: ReactNode;
}

function Background({ children }: BackgroundProps) {
  const rowCnt = 63;
  const colCnt = 75;
  const locate = useLocation();

  return (
    <>
      {locate.pathname != "/" ? (
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
          {children}
        </TotalWrapper>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default Background;

const TotalWrapper = styled.div`
  min-width: 1420px;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
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
