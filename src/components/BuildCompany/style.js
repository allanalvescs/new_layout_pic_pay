import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    h2{
        color: ${(props) => props.theme.Color};
        font-size: 1.2rem;
        font-family: var(--font-Inter);
        text-align: center;
    }
`

export const ConteinerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.Div.background};
    padding: 32px 0px;
    margin-top: 22px;

    > p{
        font-weight: 600;
        font-family: var(--font-Inter);
        color: ${(props) => props.theme.Color};
        font-size: 1.2rem;
        width: 260px;
        text-align: center;
    }

    button{
        width: 150px;
        height: 35px;
        border-radius: 12px;
        margin-top: 12px;
        font-weight: 600;

        color: var(--color-light);
        box-shadow: 2px 2px 4px var(--color-dark);
        background-color: ${(props) => props.theme.Button.background};
    }

    ul{
        display: flex;
        flex-direction: column;

        li{
            margin-bottom: 32px;
            width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: var(--font-Inter);
            img{
                margin-bottom: 12px;
                width: 100%;
            }
            h3{
                text-align: center;
                width: 250px;
                color: ${(props) => props.theme.Color};
            }
            p{
                margin-top: 12px;
                text-align: center;
                color: ${(props) => props.theme.Color};
            }
        }
    }

    @media screen and (min-width: 768px){
        > p{
            width: 600px;
        }
    }

    @media screen and (min-width: 1024px){
        ul{
            width: 1020px;
            flex-direction: row;
            justify-content: space-between;

            li{
                h3{
                    flex: 1;
                }
            }
        }
    }
`