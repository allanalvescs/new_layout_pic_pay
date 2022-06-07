import { createContext, useCallback, useContext, useState } from "react";

export const themeContext = createContext("light");

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    const getOppositeMode = useCallback(
        () => {
            return mode === "light" ? "dark" : "light"
        }, [mode]
    )

    return (
        <themeContext.Provider value={{ setMode, getOppositeMode, mode }}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = () => useContext(themeContext)