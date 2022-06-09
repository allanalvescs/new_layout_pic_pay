import styled from "styled-components";

export const Container = styled.div`
    margin: 62px auto;
    max-width: 500px;
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        font-family: var(--font-Inter);
        h2{
            color: ${(props) => props.theme.Color};
            font-size: 1.2rem;
            text-align: center;
        }

        p{
            color: ${(props) => props.theme.Color};
            text-align: center;
            margin: 16px 0px;
        }

        button{
            color: var(--color-light);
            background-color: ${(props) => props.theme.Button.background};
            width: 165px;
            height: 35px;
            display: block;
            margin: 26px auto;

            font-weight: 600;
            border-radius: 12px;
            box-shadow: 2px 2px 4px var(--color-dark);
        }
    }


    figure{
        width: 300px;
        height: 400px;

        margin-top: 32px;
        img{
            width: 100%;
        }
    }

`