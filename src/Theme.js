const lightMode = {
    backgroundColor: "var(--color-light)",
    mainColor: "var( --color-primary-light)",
    Color: "var(--color-dark)",
    Button: {
        background: "var(--blue-light)"
    },
    Div: {
        background: "var(--color-second-light)"
    }
}

const darkMode = {
    backgroundColor: "var(--color-dark)",
    mainColor: "var(-color-dark)",
    Color: "var(--color-light)",
    Button: {
        background: "var(--blue-dark)"
    },
    Div: {
        background: "var(--primary-color-dark)"
    }
}

export const Theme = {
    light: lightMode,
    dark: darkMode
}