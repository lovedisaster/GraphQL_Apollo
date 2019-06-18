import styled from "styled-components";

export const LogoBannerWrapper = styled.div`
    width: 100%;
    height: 150px;
    background-color:#fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-content: center;
    align-items: center;
    font-family: 'Questrial', sans-serif;
    font-weight: 400;
    .container {
        display: flex;
        position: relative;
        justify-content: center;
        text-align: center;
        width: 100%;
    }
`;

export const Title = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-left: 15px;
    height: 63px;
    img{
        display:inline-block;
        margin-right:50px;
        height: 70px;
    }
    h5{
    display:inline-block;
    position:relative;
    margin-bottom:-20px;
    }
`;