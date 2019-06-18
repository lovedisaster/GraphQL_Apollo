import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  CheckMark
} from './StyledComponents';

const Checkbox = props => {
  return (
    <Wrapper onClick={props.onClickHandler}>
      <input type="checkbox" />
      <CheckMark checked={props.checked} />
    </Wrapper>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onClickHandler: PropTypes.func
};

export default Checkbox;

