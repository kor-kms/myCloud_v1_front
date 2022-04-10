import App from "./App";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import { GlobalStyle } from "styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "styles/ThemeConfig";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={ThemeConfig}>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
