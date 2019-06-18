import styled from "styled-components";
import GS from '../../Shared/GlobalStyle';

export const DonationForm = styled.div`
  display: block;
  padding: 50px 15px 0 15px;
  text-align:center;
  min-width: 300px;
  @media(min-width: ${GS.media.sm}) {
    width: 600px;
  }
`;