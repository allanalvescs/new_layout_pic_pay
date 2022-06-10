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
            width: 349px;
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

    @media screen and (min-width: 712px){
        padding: 32px 16px;
        flex-direction: row-reverse;
        align-items: flex-start;
        justify-content: center;
        div {
            justify-content: space-between;
            padding: 0px 12px;
            height: 400px;
            h2{
                margin: 0;
                text-align: start;
                line-height: 32px;
            }

            article{
                margin:0;
                p{  
                    margin: 0;
                    text-align: start;
                    font-size: 1.2rem;
                    line-height: 30px;
                }
            }
            
            button{
                margin: 0;
            }
        }
    }

    @media screen and (min-width: 1440px){
        justify-content: space-between;
        height: 500px;
        padding: 0;

        div{
            flex: 1;
            align-items: center;
            justify-content: center;

            h2{
                font-size: 2rem;
                width: 500px;
                line-height: 2.8rem;
            }

            article{
                width: 500px;
                margin: 36px 0px;
            }

            button{
                width: 200px;
                height: 45px;
                margin-right: 300px;
            }
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

    @media screen and (min-width: 712px){
        width: 400px;
        height: 400px;
        margin-right: 32px;
    }

    @media screen and (min-width: 1440px){
        width: 800px;
        height: 100%;
        margin: 0;
    }
`