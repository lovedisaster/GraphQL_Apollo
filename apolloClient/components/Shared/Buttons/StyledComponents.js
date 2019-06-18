import styled from 'styled-components';
import GS from '../../Shared/GlobalStyle';

export const SolidButton = styled.button`
  border-radius: 50px;
  background-color: ${props => props.disabledTransparent ? GS.colors.disabledTransparent : (props.disabled? GS.colors.disabled : (props.promote ? GS.colors.primary : GS.colors.primaryBlue))};
  padding: 13px 30px;
  color: ${props => props.disabledTransparent ? GS.colors.grayText : "#fff"};
  border:none;
  text-align:center;
  transition: background-color ease 0.3s;          
  width:${props => props.width};
  font-size: ${GS.fontSize.desktop.p};
  &:hover{
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    background-color: ${props => props.disabledTransparent ? GS.colors.disabledTransparent : (props.disabled? GS.colors.disabled : (props.promote ? GS.colors.primaryDark : GS.colors.primaryBlueDark))};
  }
  &:focus{
    outline:none;
  }
`;

export const BlankButton = styled.button`
  border-radius: 50px;
  border: 1px solid ${GS.colors.secondary};
  color: ${GS.colors.secondary};
  padding: ${props => props.isSmall? '9px 30px': '13px 30px'};
  text-align:center;
  transition: all ease 0.3s;
  background-color:#fff;
  width:${props => props.width};
  font-size: ${GS.fontSize.desktop.p};

  &:hover{
    cursor:pointer;
    color: ${GS.colors.secondary};
    box-shadow: inset 0px 0px 0px 1px ${GS.colors.secondary};
  }
  &:focus{
    outline:none;
  }
`;

export const UnselectBtn = BlankButton.extend`
  height: 35px;
  font-size: 12px;
  padding: 8px 15px;
  @media(max-width: ${GS.media.sm_m}){
    padding: 3px 6px;
    height: 25px;
    font-size:9px;
  }
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  &:disabled{
    border: 1px solid ${GS.colors.disabled};
    color: ${GS.colors.disabled};
    &:hover{
      cursor:not-allowed;
      box-shadow: none;
    }
  }
  >img{
    width: 10px;
    @media(max-width: ${GS.media.sm_m}){
      width: 5px;
    }
    margin-left: 10px;
  }
`;

export const CenteredButton = SolidButton.extend`
  margin:0 auto;
`;

export const ArrowedButton = styled.a`
  display:${props => props.show ? 'inline-flex' : 'none'};
  justify-content:flex-start;
  align-items:center;
  width: auto;
  color: ${props => props.color ? props.color : GS.colors.primaryBlue}!important;
  padding: 0 10px;
  > svg{
    transform:rotate(180deg);
    margin-right: 10px;
  }
  &:hover{
    cursor:pointer;
  }
`;

export const LinkedBtn = styled.a`
  > span {
    color: ${GS.colors.primaryBlue};
  }
  &:hover{
    cursor:pointer;
  }
`

export const IconButton = styled.button`
  position: relative;
  cursor: pointer;
  width: 82px;
  padding: 0;
  background-color: inherit;
  border: none;
  text-align: center;
  img {
    display: block;
    margin: 5px auto;
    width: 50%;
  }
  small {
    width: 100%;
    color: ${GS.colors.primaryBlue};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${GS.media.md_m}) {
    width: 25px;
    img {
      display: block;
      margin-right: 0;
      width: 100%;
      height: 22px;
    }
    small {
      display: none;
    }
  }
`;