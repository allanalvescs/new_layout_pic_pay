import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 12px 0px;
    h3{
        font-size: 1.4rem;
        color: var(--color-light);
        font-family: var(--font-Inter);
        margin: 16px 0px;
    }

    li{
        cursor: pointer;
        font-size: 1rem;
        color: var(--color-light);
        font-family: var(--font-Inter);
        margin-bottom: 8px;
    }

    @media screen and (min-width:768px){
        
    }
`