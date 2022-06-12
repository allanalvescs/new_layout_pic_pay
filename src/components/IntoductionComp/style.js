import styled from "styled-components";

import BackgroundCompany from "../../Images/back_company.jpeg"

export const Container = styled.div`
    background-image: url(${BackgroundCompany});
    background-repeat: no-repeat;
    background-size: cover;

    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        color: var(--color-light);
        font-family: var(--font-Inter);
        font-size: 1.5rem;
        text-align: center;
        width: 320px;
        margin: 12px auto;
    }

    p{
        color: var(--color-light);
        font-family: var(--font-Inter);
        width: 330px;
        margin: 0 auto;
        text-align: center;
        font-size: 1.2rem;
    }

    button{
        color: var(--color-light);
        width: 150px;
        height: 35px;
        border-radius: 12px;
        margin: 32px auto;
        font-weight: 600;
        background:${(props) => props.theme.Button.background};
    }
`