import { NavegationProvider } from "./NavPages";
import { ThemeProvider } from "./Theme";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <NavegationProvider>
        {children}
      </NavegationProvider>
    </ThemeProvider>
  );
}

export default Providers;
