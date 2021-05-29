import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import { Redirect } from "react-router";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isPassSame: true,
    };
  }

  checkPass = () => {
    if (this.state.password === this.state.confirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleRegister = (event) => {
    event.preventDefault();
    console.log("JHELLO");
    this.props.onSignUpClick(
      this.state.fullName,
      this.state.userName,
      this.state.email,
      this.state.password
    );
  };

  redirectToSignIn = (event) => {
    console.log("success");
    <Redirect to="/signin" />;
  };

  render() {
    // console.log(this.state);
    const isPassSame = this.checkPass();

    var submitbutton = (
      <input onClick={this.handleRegister} type="submit" value="SignUp" />
    );

    if (!isPassSame) {
      submitbutton = (
        <input
          onClick={this.handleRegister}
          type="submit"
          value="SignUp"
          disabled
        />
      );
    }

    return (
      <div>
        {this.props.isRegistered ? (
          <Redirect to="/signin" />
        ) : (
          <div>
            <form>
              <label>
                Full Name :
                <input
                  onChange={this.onInputChange}
                  type="text"
                  name="fullName"
                  required
                />
              </label>
              <br />
              <label>
                User Name :
                <input
                  onChange={this.onInputChange}
                  type="text"
                  name="userName"
                  required
                />
              </label>
              <br />

              <label>
                Email :
                <input
                  onChange={this.onInputChange}
                  type="email"
                  name="email"
                  required
                />
              </label>
              <br />

              <label>
                Password :
                <input
                  onChange={this.onInputChange}
                  type="password"
                  name="password"
                  required
                />
              </label>
              <br />
              <label>
                Confirm Password :
                <input
                  onChange={this.onInputChange}
                  type="password"
                  name="confirmPassword"
                  required
                />
              </label>
              {isPassSame ? null : (
                <p style={{ color: "red" }}>Password not same</p>
              )}

              <br />
              <br />
              {submitbutton}
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isRegistered: state.auth.isRegister,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpClick: (fullName, userName, email, password) =>
      dispatch(actions.onSignUpClick(fullName, userName, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
