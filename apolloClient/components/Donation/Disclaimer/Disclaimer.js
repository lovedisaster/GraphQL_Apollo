import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Wrapper} from '../Donation.style';
import {DisclaimerForm, Question, QuestionWrapper} from './Disclaimer.style';
import Checkbox from '../../Shared/Checkbox/Checkbox';
import {Button} from '../../Shared/Buttons/Buttons';
import {SubSteps} from '../Donation';
class Disclaimer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      acceptedHearFormUs : false,
      accepted : false
    }
    this._onChecked = this._onChecked.bind(this);
    this._onCheckedHearFormUs = this._onCheckedHearFormUs.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChecked() {
    this.setState({
      accepted : !this.state.accepted
    })
  }

  _onCheckedHearFormUs() {
    this.setState({
      acceptedHearFormUs : !this.state.acceptedHearFormUs
    })
  }

  _onSubmit(event) {
    // when click sign in button using axios to post login user detail
      event.preventDefault();
      if(this.state && this.state.accepted) {
        this.props.stepHandler(SubSteps.DONATE);
      }else{
        alert('Please accept terms and conditions.')
      }
  }

  render() {
    return (
      <Wrapper>
        <div className="container">
          <DisclaimerForm>
            <h1>Terms and Conditions</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <QuestionWrapper>
              <Checkbox checked={this.state.acceptedHearFormUs} onClickHandler={this._onCheckedHearFormUs}/>
              <Question>
                Would you like to hear from us regarding Green car options ? 
              </Question>
            </QuestionWrapper>
            <QuestionWrapper>
              <Checkbox checked={this.state.accepted} onClickHandler={this._onChecked}/>
              <Question>
                Yes, I accept
              </Question>
            </QuestionWrapper>
            <br/>
            <Button value="Next" width={'150px'} onClickHandler={this._onSubmit} disabled={this.state ? !this.state.accepted : true} />
          </DisclaimerForm>
        </div>

      </Wrapper>
    );
  }
}



export default Disclaimer;