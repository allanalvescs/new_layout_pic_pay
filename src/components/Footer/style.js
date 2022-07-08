import styled from "styled-components";

export const FooterCustomizer = styled.footer`
    background-color: var(--color-primary-light);
    display: flex;
    flex-direction: column;
    padding: 62px 32px 200px;
    @media screen and (min-width:768px){
        margin-top: 92px;
        padding: 32px 16px 160px;
    }
`

export const DivCustomizer1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    div{
        display: flex;
        align-items: center;
        margin-bottom: 26px;
        
        img{
            width: 150px;
            border-right: solid 4px var(--color-light);
        }

        p{

            margin-left: 22px;
            color: var(--color-light);
            width: 200px;
            font-family: var(--font-Inter);
        }
    }

    @media screen and (min-width:768px){
        flex-direction: row;
        width: 80%;
        margin: auto;
    }
`

export const DivCustomizer2 = styled.div`
    display: flex;
    flex-direction: column;


    @media screen and (min-width:768px){
        width: 80%;
        margin: auto;
        flex-direction: row;
        justify-content: space-between;
    }
`