import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    background-color: ${(props) => props.theme.Div.background};

    div{
        height: 292px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        font-family: var(--font-Inter);
        font-size: 1rem;
        h2{
            max-width: 349px;
            width: 100%;
            margin: auto;
            text-align: center;
            color: ${(props) => props.theme.Color};
        }

        article{
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 335px;
            margin: auto;
            p{
                font-size: 0.75rem;
                margin: 10px;
                color: ${(props) => props.theme.Color};
                text-align: center;
            }
        }

        button{
            width: 150px;
            height: 35px;
            margin: auto;

            border-radius: 12px;
            font-weight: 600;
            color: var(--color-light);
            box-shadow: 2px 2px 4px var(--color-dark);
            background-color: ${(props) => props.theme.Button.background};
        }
    }

`

export const BoxImage = styled.figure`
    width: 100%;
    height: 300px;

    img{
        width: 100%;
        height: 100%;
    }
`