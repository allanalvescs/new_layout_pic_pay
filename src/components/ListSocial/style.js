import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    li{
        border: solid 2px var(--color-light);
        border-radius: 100%;
        cursor: pointer;
        width: 50px;
        height: 50px;
        margin: 12px ;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (min-width:768px){
        justify-content: right;
    }
`