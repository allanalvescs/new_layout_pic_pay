import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme";

import Header from "./components/Header";
import { useTheme } from "./Providers/Theme";
import { ContainerContent } from "./style/style";
import Navegation from "./components/Navegaion";
import IntroductionHome from "./components/IntroductionHome";
import OrderCredit from "./components/OrderCredit";

function App() {
  const { mode } = useTheme()

  return (
    <ThemeProvider theme={Theme[mode]}>
      <ContainerContent>
        <Header />
        <Navegation />

        <main>
          <IntroductionHome />
          <OrderCredit />
        </main>
      </ContainerContent>
    </ThemeProvider>
  );
}

export default App;
