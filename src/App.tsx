//Packages
import { ThemeProvider } from "styled-components";

// Components
import Header from "./components/Header";

// Styles
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
