import { createContext, useContext, useState } from "react";

export const navegationContext = createContext({});

export const NavegationProvider = ({ children }) => {
    const [page, setPage] = useState(JSON.parse(localStorage.getItem("@Navegation/Page")) || { page: "/", position: 0 });

    const handleFocus = (page, position) => {
        const newFocus = { page: page, position: position }

        setPage(newFocus)
        localStorage.setItem("@Navegation/Page", JSON.stringify(newFocus));
    }

    return (
        <navegationContext.Provider value={{ page, handleFocus }}>
            {children}
        </navegationContext.Provider>
    )
}

export const useNavegation = () => useContext(navegationContext);