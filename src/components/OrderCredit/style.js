import styled from "styled-components";

export const Container = styled.div`
    margin: 62px auto;
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
        width: 320px;
        height: 400px;

        margin-top: 32px;
        img{
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (min-width: 712px){
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        div{
            margin: 0px 26px;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            h2{
                text-align: start;
                width: 500px;
            }

            p{
                text-align: start;
                width: 500px;
            }

          
        }

        figure{
            width: 400px;
            margin-top: 0px;
        }
    }

    @media screen and (min-width: 1440px){
        div{
            h2{
                font-size: 2rem;
                width: 500px;
            }

            p{
                width: 500px;
                margin: 32px 0;
                font-size: 1.2rem;
                line-height: 2rem;
            }
            button{
                margin: 0;
                margin-right: 300px;
                width: 200px;
                height: 45px;
            }
        }

        figure{
            width: 800px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 500px;
                height: 500px;
            }
        }
    }
`