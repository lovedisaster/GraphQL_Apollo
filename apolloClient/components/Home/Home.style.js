import styled from "styled-components";
import Hero from "./Hero.jpg";

export const Banner = styled.div `
  min-height: ${(window.innerHeight - 220) + 'px'};
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  background-image: url(${Hero});
  background-position: center;
  background-size: cover;
  padding-top:80px;
  font-family: 'Righteous', cursive;
  font-weight: 700;
  .col {
    margin: o auto;
  }
  .row-md-auto {
    margin-bottom:40px;
  }
  `;

export const BannerTitle = styled.div`
  display:flex;
  justify-content:center;
  align-items:flex-start;
  h1 {
    color:#fff;
    display:inline-block;
    margin:0 auto;
    font-size:100px;
    margin-left:-10px;

  }
  h5 {
    color:#fff;
    margin:0 auto;
    display:inline-block;
    font-size: 30px;
    font-family: 'Righteous', cursive;

  }
  img {
    height: 100px;
    margin-top:-10px;
    margin-right:-10px;
  }
  .row-md-auto{
    margin-bottom: 0;
  }
`;

