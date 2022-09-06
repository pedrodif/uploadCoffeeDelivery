//Packages
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Components
import { Router } from "./Router";

// Styles
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
