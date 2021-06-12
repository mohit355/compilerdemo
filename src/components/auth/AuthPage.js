import React, { Component } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default class AuthPage extends Component {
  state = {
    showSignIn: true,
  };
  showSignInDetails = (event) => {
    this.setState({ showSignIn: true });
  };
  showSignUpDetails = (event) => {
    this.setState({ showSignIn: false });
  };

  render() {
    console.log(this.state);

    return (
      <div className="authPage">
        <div className="authPage_box">
          <div className="authTypeHeader">
            <h3 onClick={this.showSignInDetails}>SignIn</h3>
            <h3 onClick={this.showSignUpDetails}>SignUp</h3>
          </div>
          <div>
            {this.state.showSignIn ? <SignIn></SignIn> : <SignUp></SignUp>}
          </div>
        </div>
      </div>
    );
  }
}
