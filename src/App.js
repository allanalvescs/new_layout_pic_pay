import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/global";
import { Theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
