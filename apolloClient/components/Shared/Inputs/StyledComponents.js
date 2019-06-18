import styled from 'styled-components';
import GS from '../../Shared/GlobalStyle';

export const Input = styled.input`
  height: 56px;
  border-radius:6px;
  border:solid 1px ${GS.colors.grayBorder};
  padding: 0 0 0 20px;
  width: 100%;
  font-size: 14px;

  &:focus{
    outline:none;
  }
`;

export const InputWrapper = styled.div`
  position:relative;
  padding:0;
  margin:0;
  display:inline-flex;
  align-items: ${props => props.active ? 'flex-start' : 'center'};

  width: 100%;
  input[type=text]{
    padding-top:${props => props.active ? '12px' : '0'};
    border: ${props => props.warning ? '1px solid ' + GS.colors.warning : '1px solid ' + GS.colors.grayBorder};
    @media (max-width: ${GS.media.xs}) {
      ${props => props.hideTop && `
        border-top: none;
      `}
    }
  }
  >label.desc{
    position:absolute;
    font-size:${props => props.active ? '10px' : GS.fontSize.desktop.small};
    color:${props => props.active ? '#000' : GS.colors.grayText};
    left: ${props => props.active ? '20px' : '20px'};
    top: ${props => props.active ? '7px' : 'none'};
    z-index:${GS.zindex.z1};
    margin:0;
    transition:ease all 0.3s;

  }
  span.error{
    position: absolute;
    z-index: ${GS.zindex.z1};
    right:0;
    top: -30px;
    height: 30px;
    color: #fff;
    background-color: #ed1c24;
    border: solid 1px #ed1c24;
    text-align: left;
    font-size: 12px;
    align-items: center;
    padding: 0 15px;
    border-radius: ${GS.styles.borderRadius1} ${GS.styles.borderRadius1} 0 0;
    display: ${props => props.warning ? 'inline-flex' : 'none'};
  }
`;