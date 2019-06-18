import React from "react";
import PropTypes from "prop-types";
import {
  SolidButton,
  BlankButton,
  CenteredButton,
  IconButton,
  LinkedBtn
} from "./StyledComponents";

export const Button = props => {
  return (
    <SolidButton
      onClick={props.onClickHandler}
      width={props.width}
      disabled={props.disabled}
      disabledTransparent={props.disabledTransparent}
      promote={props.promote ? true : false}
    >
      {props.value}
    </SolidButton>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
  disabledTransparent: PropTypes.bool,
  promote: PropTypes.bool
};

export const SecondaryButton = props => {
  return (
    <BlankButton onClick={props.onClickHandler} isSmall={props.isSmall} width={props.width}>
      {props.value}
    </BlankButton>
  );
};

SecondaryButton.propTypes = {
  value: PropTypes.string,
  onClickHandler: PropTypes.func,
  width: PropTypes.string,
  isSmall: PropTypes.bool
};


export const CenterButton = props => {
  return (
    <CenteredButton
      onClick={props.onClickHandler}
      width={props.width}
      disabled={props.disabled}
    >
      {props.value}
    </CenteredButton>
  );
};

CenterButton.propTypes = {
  value: PropTypes.string,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
  width: PropTypes.string
};




export const ProceedButton = props => {
  return (
    <IconButton onClick={props.onClickHandler}>
      {props.children}
    </IconButton>
  )
}
export const LinkedButton = props => {
  return (
    <LinkedBtn onClick={props.onClickHandler}>
      <span>{props.displayName}</span>
    </LinkedBtn>
  );
};

LinkedButton.propTypes = {
  displayName: PropTypes.string,
  onClickHandler: PropTypes.func
};
