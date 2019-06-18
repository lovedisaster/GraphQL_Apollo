// @flow strict
import React from 'react';
import Disclaimer from './Disclaimer/Disclaimer';
import Donate from './Donate/Donate';
import Login from './Login/Login';
import ThankYou from './ThankYou/ThankYou';

import gql from 'graphql-tag';
import {graphql, compose} from 'react-apollo';


export const SubSteps = {
  LOGIN : "LOGIN",
  DISCLAIMER : "DISCLAIMER",
  DONATE : "DONATE",
  THANKYOU : "THANKYOU"
}

const mutation = gql`
    mutation donate($amount : Int){
        donate(amount: $amount) {
            total
        }
    }
`
class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: SubSteps.LOGIN,
      donatedAmount: 0
    }
    this._goToStep = this._goToStep.bind(this);
    this._addToSaved = this._addToSaved.bind(this);
  }

  _goToStep(step) {
    this.setState(os => {
      let ns = Object.assign({}, os);
      ns.currentStep = step;
      return ns;
    })
  }

  _addToSaved(amount){
    this.props
      .mutate({variables: {amount: amount}})
      .then(res => {
          if(res.data && res.data.donate){
            this.setState({donatedAmount: amount});
          }
          this._goToStep(SubSteps.THANKYOU);
      })
      .catch(e => {
        alert('Failed to make donation.');
      })
  }

  render() {
    switch(this.state.currentStep) {
      case SubSteps.LOGIN : 
        return (
          <Login stepHandler={this._goToStep}/>
        );
      case SubSteps.DISCLAIMER : 
        return (
          <Disclaimer stepHandler={this._goToStep}/>
        );
      case SubSteps.DONATE : 
        return (
           <Donate stepHandler={this._goToStep} submitHandler={this._addToSaved}/>
        );
      case SubSteps.THANKYOU : 
        return (
          <ThankYou donatedAmount = {this.state.donatedAmount} />
        );
      default: 
        return (
          <Login stepHandler={this._goToStep}/>
        );  
    }
    
  }
}

export default compose(
  graphql(mutation)
)(Donation);

