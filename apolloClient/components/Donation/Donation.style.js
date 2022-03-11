import styled from "styled-components";

export const Wrapper = styled.div `
  min-height: ${(window.innerHeight - 230) + 'px'};
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 30px;
  background-color: #eee;
  .card {
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    width: 500px;
    @media (max-width: 992px) {
      width: 300px;
    }
    padding: 15px;
    margin: 50px auto 25px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;