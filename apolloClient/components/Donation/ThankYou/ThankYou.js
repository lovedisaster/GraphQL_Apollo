import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Wrapper} from '../Donation.style';
import {ThankYouWrapper} from './ThankYour.style';

class ThankYou extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <ThankYouWrapper>
        <p>Thank you for your help. You've donated ${this.props.donatedAmount}.</p>
        <a href="/">Back to home page</a>
        </ThankYouWrapper>
      </Wrapper>
    );
  }
}

export default ThankYou;