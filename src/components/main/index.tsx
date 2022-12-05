import { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../background";
import Apply from "./apply";
import Count from "./count";
import More from "./more";
import TitleEN from "./titleEN";
import TitleKR from "./titleKR";

function MainPage() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
    if (position < window.scrollY) {
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function ShortCut(pagenum: number) {
    window.scrollTo({
      top: pagenum * 1000,
      behavior: "smooth",
    });
  }

  return (
    <>
      <QuickMoveContainer>
        {new Array(5).fill(0).map((value, index) => (
          <QuickMoveDot
            enabled={
              position >= index * 1000 - 400 &&
              position < (index + 1) * 1000 - 400
            }
            onClick={() => ShortCut(index)}
          />
        ))}
      </QuickMoveContainer>
      <TitleKR />
      <TitleEN />
      <Count />
      <Apply />
      <More />
    </>
  );
}

export default MainPage;

const QuickMoveContainer = styled.div`
  z-index: 100;
  height: 124px;
  position: fixed;
  left: 28px;
  top: calc(50% - 62px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: content-box;
`;

const QuickMoveDot = styled.div<{ enabled: boolean }>`
  box-sizing: content-box;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.main.default};
  background-color: ${({ theme, enabled }) =>
    enabled && theme.colors.main.default};
  cursor: pointer;
`;
