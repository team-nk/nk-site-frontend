import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Background from "./components/background";
import TitleKR from "./components/main/titleKR";
import styled from "styled-components";
import TitleEN from "./components/main/titleEN";
import Count from "./components/main/count";
import Apply from "./components/main/apply";
import More from "./components/main/more";
import Footer from "./components/footer";

function MainRouter() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Background>
                  <TitleKR />
                  <TitleEN />
                  <Count />
                  <Apply />
                  <More />
                </Background>
              }
            />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}
export default MainRouter;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;
