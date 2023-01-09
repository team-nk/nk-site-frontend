import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import BackgroundMain from "./components/background/main";
import TitleKR from "./components/main/titleKR";
import styled from "styled-components";
import TitleEN from "./components/main/titleEN";
import Count from "./components/main/count";
import Apply from "./components/main/apply";
import More from "./components/main/more";
import Footer from "./components/footer";
import MainPage from "./components/main";
import ToTop from "./components/objects/totop";
import Background from "./components/background";
import TeamPage from "./components/team";
import ProjectPage from "./components/project";
import FAQPage from "./components/faq";

function MainRouter() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Background>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <BackgroundMain />
                    <MainPage />
                  </>
                }
              />
              <Route
                path="/team"
                element={
                  <>
                    <TeamPage />
                  </>
                }
              />
              <Route
                path="/project"
                element={
                  <>
                    <ProjectPage />
                  </>
                }
              />
              <Route
                path="/faq"
                element={
                  <>
                    <FAQPage />
                  </>
                }
              />
            </Routes>
            <ToTop />
            <Footer />
          </Background>
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
