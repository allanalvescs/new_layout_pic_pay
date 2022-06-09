import { useTheme } from "./Providers/Theme";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme";

import { ContainerContent } from "./style/style";

import Navegation from "./components/Navegaion";
import RoutePage from "./Routes";
import Header from "./components/Header";

function App() {
  const { mode } = useTheme()

  return (
    <ThemeProvider theme={Theme[mode]}>
      <ContainerContent>
        <Header />
        <Navegation />

        <RoutePage />
      </ContainerContent>
    </ThemeProvider>
  );
}

export default App;
