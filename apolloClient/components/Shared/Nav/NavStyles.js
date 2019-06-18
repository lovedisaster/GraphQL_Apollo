import styled from "styled-components";

export const NavWrapper = styled.header `
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    top:0;
    font-family:'Questrial', sans-serif;
    background-color:#333;
    z-index: 100;
    >.container{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .moneyIcon {
    height: 40px;
    }

    .nav-link {
    color: #eee;
    }

    .nav-link:hover{
    color: #fff;
    }
}
`