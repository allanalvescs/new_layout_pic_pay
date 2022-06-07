import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        border: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    :root{
        --color-primary-light: #70C871;
        --color-dark: #252525;
        
        --primary-color-dark: #5A966D;
        --green-dark: #108612;

        --color-second-light: #EFF0E8;
        --color-light: #F9F9F9;

        --blue-light: #426CFC;
        --blue-dark: #1134AC; 

        --font-Inter: 'Inter', sans-serif;
    }
`