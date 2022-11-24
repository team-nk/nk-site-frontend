import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import theme from "./style/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot, useRecoilState } from "recoil";
import MainRouter from "./route";

function App() {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <MainRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
