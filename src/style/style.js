import styled from "styled-components";

export const ContainerContent = styled.div`
    height: 100vh;
    position: relative;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    background-color: ${(props) => props.theme.mainColor};
`