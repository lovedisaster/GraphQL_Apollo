import styled from "styled-components";
import GS from '../../Shared/GlobalStyle';
export const DisclaimerForm = styled.div `
  height: auto;
  width: 100%;
  display: block;
  background-color: #F7F7F7;
  /* just in case there no content*/
  padding: 50px;
  margin: 0 auto 25px;
  margin-top: 50px;
  /* shadows and rounded borders */
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  @media (max-width: ${GS.media.md_m}) {
    padding: 25px;
  }
`;

export const Question = styled.p`
  display:inline-block;
  margin-bottom: 0;
  margin-left: 15px;
`;

export const QuestionWrapper = styled.div`
  display:flex;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: flex-start;
  align-items: center;
`;