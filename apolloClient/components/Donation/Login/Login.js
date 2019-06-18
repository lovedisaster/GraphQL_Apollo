import React,{ Component } from 'react';
import {Wrapper} from '../Donation.style';
import './Login.css';
import {SubSteps} from '../Donation';

export default class Login extends Component{
    // this.state to store the user information
    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: '',
        authenticated: false,
        error: false
      }
    }

    // handle user input - username
    handleUsernameChanged(event){
      this.setState({
        username: event.target.value
      });
    }

    // handle user input - password
    handlePasswordChanged(event){
      this.setState({
        password: event.target.value
      });
    }

    // check if any error when login
    isError(){
      return this.state.error;
    }

    // when click sign in button using axios to post login user detail
    submitForm(event){
      event.preventDefault();
      if(this.state && this.state.username && this.state.password) {
        this.setState({authenticated: true});
        this.props.stepHandler(SubSteps.DISCLAIMER);
      }else{
        alert('Login form is not validated.')
      }
    }

    render(){
      // alert user if error login
      const error = this.isError();
      const errortag = error? (
        <div className="alert alert-danger" role="alert"> Oops..Try Again!</div>
      ):(<div></div>);

      return(
            <Wrapper>
                <div className="card card-container">
                  <h5>LOGIN</h5>
                    <form className="form-signin" onSubmit = {this.submitForm.bind(this)}>
                        <span id="reauth-email" className="reauth-email"></span>
                        <input
                          type="email"
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"
                          value = {this.state.username}
                          onChange = {this.handleUsernameChanged.bind(this)}
                          required autoFocus />

                        <input
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          placeholder="Password"
                          value = {this.state.password}
                          onChange = {this.handlePasswordChanged.bind(this)}
                          required />

                        <div id="remember" className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        {errortag}
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" >Sign in</button>
                    </form>
                    <a href="#" className="forgot-password">
                        Forgot the password?
                    </a>
                </div>
            </Wrapper>
      );
    };


}