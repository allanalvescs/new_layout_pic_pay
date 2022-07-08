import styled from "styled-components";

export const HeaderCustomizer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 12px;
    background-color: ${(props) => props.theme.backgroundColor};
    border-bottom: solid 4px var(--color-primary-light);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    a{
        display: block;
        width: 150px;   
        img{
            width: 100%;
            height: 100%;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        button{
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            font-size: 1rem;
            color: var(--color-light);

            svg{
                margin-left: 8px;
            }
        }
    }
`