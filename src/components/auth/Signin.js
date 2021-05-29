import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import { Redirect } from "react-router";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleOnChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSignInClick = (event) => {
    event.preventDefault();
    console.log("sign in clicked");
    this.props.onSignInClick(this.state.email, this.state.password);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.props.isuserLogged === 1 ? (
          <Redirect to="/" />
        ) : (
          <form>
            <label>
              email :
              <input
                type="email"
                name="email"
                onChange={this.handleOnChange}
                required
              />
            </label>
            {this.props.isuserLogged === 0 ? (
              <p style={{ color: "red" }}>User doesn't exist</p>
            ) : null}
            <br />
            <label>
              password :
              <input
                type="password"
                name="password"
                onChange={this.handleOnChange}
                required
              />
            </label>
            {this.props.isuserLogged === -1 ? (
              <p style={{ color: "red" }}>wrong password</p>
            ) : null}

            <br />
            <br />
            <input
              type="submit"
              onClick={this.handleSignInClick}
              value="SignIn"
            />
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isuserLogged: state.auth.isUserLogedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignInClick: (email, password) =>
      dispatch(actions.onSignInClick(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
