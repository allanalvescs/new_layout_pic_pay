import styled from "styled-components";

export const Container = styled.nav`
    display: none;
   
    @media screen and (min-width: 1024px){
    width: 800px;
    display: block;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li a{
            font-family: var(--font-Inter);
            color: var(--color-light);
        }
    }
       }
`