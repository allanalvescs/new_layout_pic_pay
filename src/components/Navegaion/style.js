import styled from "styled-components";

export const NavegationCustomizer = styled.nav`
    background-color: var(--color-primary-light);
    width: 100%;
    height: 85px;
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 340px;
        width: 100%;
        height: 100%;
        position: relative;
        
        li {
            margin: 12px 0px;
            position: relative;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.6s;
            width: 20%;
            span{
                position: absolute;
                display: block;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                transition: 0.6s;
                
            }

            p{
                font-size: 0.55rem;
                font-weight: 600;
                font-family: var(--font-Inter);
                color: var(--color-light);
                opacity: 0;
                transition: 0.6s;
            }

        }

        li:nth-child(1){
            span {
                transform: ${(props) => props.page === "/setting" ? "translateY(-350%)" : "translateY(0)"};
            }

            p{
                opacity: ${(props) => props.page === "/setting" ? 1 : 0};
            }
        }
        li:nth-child(2){
            span {
                transform: ${(props) => props.page === "/company" ? "translateY(-350%)" : "translateY(0)"};
            }

            p{
                opacity: ${(props) => props.page === "/company" ? 1 : 0};
            }
        }
        li:nth-child(3){
            span {
                transform: ${(props) => props.page === "/client" ? "translateY(-350%)" : "translateY(0)"};
            }

            p{
                opacity: ${(props) => props.page === "/client" ? 1 : 0};
            }
        }
        li:nth-child(4){
            span {
                transform: ${(props) => props.page === "/creditcard" ? "translateY(-350%)" : "translateY(0)"};
            }

            p{
                opacity: ${(props) => props.page === "/creditcard" ? 1 : 0};
            }
        }
        li:nth-child(5){
            span {
                transform: ${(props) => props.page === "/faqs" ? "translateY(-350%)" : "translateY(0)"};
            }

            p{
                opacity: ${(props) => props.page === "/faqs" ? 1 : 0};
            }
        }
    }
`

export const Indicator = styled.div`
    position: absolute;
    left: 41%;
    top: -55%;
    width: 65px;
    height: 65px;
    transition: 0.6s;
    border-radius: 100%;
    background-color: var(--color-primary-light);
    border: solid 5px var(--color-light);
    box-shadow: 3px 2px 10px var(--color-dark);
    transform: ${(props) => `translateX(calc(100% * ${props.move.position}))`};
`