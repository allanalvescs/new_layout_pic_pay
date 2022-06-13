import styled from "styled-components";

import BackgroundCompany from "../../Images/back_company.jpeg"

export const Intoducion = styled.div`
    background-image: url(${BackgroundCompany});
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

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
        box-shadow: 2px 2px 4px var(--color-dark);
        background:${(props) => props.theme.Button.background};
    }

    @media screen and (min-width: 768px){
        align-items: flex-start;
        padding: 32px 62px;
        height: 700px;
        h1{
            font-size: 2rem;
            width: 525px;
            text-align: start;
            margin: 12px 0px;
        }
        p{
            font-size: 1.4rem;
            text-align: start;
            font-weight: 500;
            width: 400px;
            margin: 18px 0px;
        }

        button{
            margin: 0;
        }
    }

    @media screen and (min-width: 1024px){
        background: transparent;
        padding: 0;
        padding-left: 62px;
        width: 45%;
        h1{
            font-size: 2.5rem;
            color: ${(props) => props.theme.Color};
        }
        p{
            width: 100%;
            font-size: 1.2rem;
            color: ${(props) => props.theme.Color};
        }

        button{
            width: 200px;
            height: 45px;
        }
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    figure{
        display: none;
    }
    @media screen and (min-width: 1024px){
        figure{
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            img{
                width: 400px;
                height: 400px;
            }
        }
    }
`