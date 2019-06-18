import styled from 'styled-components';

export const Wrapper = styled.div`
    display: block;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input{
      position: absolute;
      display: none;
    }
    &:after {
      content: "";
      clear: both;
      display: table;
    }
`;

export const CheckMark = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  background-color: ${props => props.checked? '#007cc2': '#f2f2f2'};
  border: ${props => props.checked? 'none': `1px solid #dbdbdb`};
  &:after {
    content: "";
    display: ${props => props.checked? 'block': 'none'};
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;