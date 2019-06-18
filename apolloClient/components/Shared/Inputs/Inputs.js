import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Input, InputWrapper} from './StyledComponents';
import {IsNumber, NumberFormat} from '../../../Utils/CommonUtils';

//Number field with validations 
export class ValidationNumberField extends Component {

  constructor(props) {
    super(props);
    this._keyPressHandler = this._keyPressHandler.bind(this);
    this.state = {
      warning: false,
      active: false
    };
  }

  _keyPressHandler(e) {
    //Validation
    const value = e.target.value;
    const isNumber = IsNumber(value.replace(',',''));
    if(this.props.formatNumber){
      e.target.value = isNumber ? NumberFormat(value.replace(',','')) : '';
    } else {
        e.target.value = isNumber ? e.target.value : '';
    }

    let validRange = (isNumber && Number(value.replace(',','')) < 1000000) || e.target.value === '';
    
    this.setState(oldState => {
      return {...oldState, warning: !validRange}
    });

    if(!this.state.warning) {
      this.props.keyPressHandler(e);
    }
  }

  _onFocusHandler(e) {
    this.props.onFocusHandler && this.props.onFocusHandler(e);
    // this.inputField.current.focus();
    this.setState(oldState => {
      return {...oldState, active: true}
    })
  }
  _onBlurHandler(e) {
    this.props.onBlurHandler && this.props.onBlurHandler(e);

    if(!e.target.value){
      this.setState(oldState => {
        return {...oldState, active: false}
      })
    }
  }

  render() {
    return (
      <InputWrapper warning={this.state.warning} active={this.state.active}>
        <Input key={this.props.keyProp} type='text' onChange={this._keyPressHandler} onFocus={(e)=> this._onFocusHandler(e)} onBlur={(e)=> this._onBlurHandler(e)} 
        name={this.props.name} borderRadiusType={this.props.borderRadiusType}/>
        <label className="desc" onClick={(e)=> this._onFocusHandler(e)}>{this.props.placeHolder}</label>
        <span className='error'>{this.props.errorMsg}</span>
      </InputWrapper>
    );
  }
}


ValidationNumberField.propTypes = {
  keyProp: PropTypes.string,
  placeHolder: PropTypes.string,
  name: PropTypes.string,
  errorMsg: PropTypes.string,
  keyPressHandler: PropTypes.func,
  formatNumber: PropTypes.bool,
  onFocusHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
  borderRadiusType: PropTypes.string,
};

const InputField = props => {
  return (
    <Input type='text' onChange={() => props.keyPressHandler()}  onFocus={props.onFocusHandler} placeholder={props.placeHolder} name={props.name}/>
  );
};

InputField.propTypes = {
  placeHolder: PropTypes.string,
  name: PropTypes.string,
  keyPressHandler: PropTypes.func,
  onFocusHandler: PropTypes.func
};

export default InputField;