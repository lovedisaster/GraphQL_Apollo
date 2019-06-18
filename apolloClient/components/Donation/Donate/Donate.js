import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Wrapper} from '../Donation.style';
import {DonationForm} from './Donate.style';
import {ValidationNumberField} from '../../Shared/Inputs/Inputs';
import {Button} from '../../Shared/Buttons/Buttons';

class Donate extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount : 0
    }
    this._keyPressHandler = this._keyPressHandler.bind(this);
    this._submitForm = this._submitForm.bind(this);
  }

  _keyPressHandler(e) {
    this.setState({amount: parseFloat(e.target.value.replace(/,/g, ''))});    
  }

  _submitForm() {
    if(this.state && this.state.amount > 0) {
      //Call backend for donation 
      this.props.submitHandler(this.state.amount);
    }
  }

  render() {
    return (
      <Wrapper>
          <DonationForm>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </small>
            <br/><br/>
            <ValidationNumberField keyProp='Amount' keyPressHandler={this._keyPressHandler} onFocusHandler={() => {}}  onBlurHandler={() => {}} formatNumber={true} name='Amount' placeHolder="Enter Donation Amount"
                errorMsg="Must be less than 1,000,000"/>    
              <br/>              <br/>
              <br/>

            <Button value="Make Donation" width={'200px'} onClickHandler={this._submitForm} disabled={this.state ? !(this.state.amount > 0) : true} />
          </DonationForm>
      </Wrapper>
    );
  }
}


export default Donate;