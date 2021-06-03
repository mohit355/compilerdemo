import React, { Component } from "react";
import LogOut from "../auth/LogOut";
import * as actions from "../../store/actions/actions";
import { connect } from "react-redux";
import SignIn from "../auth/SignIn";
import { Redirect } from "react-router";

class Hoc extends Component {
  state = {
    redirectSignIn: false,
  };
  handleSignInClick = (event) => {
    event.preventDefault();
    this.setState({
      redirectSignIn: true,
    });
  };
  render() {
    console.log("userDetails", this.props.isuserLogged);
    var logDetails = "";

    if (this.props.isuserLogged === 1) {
      logDetails = (
        <>
          {localStorage.getItem("cpiiitkUserName")}
          <LogOut></LogOut>
        </>
      );
    } else {
      logDetails = (
        <>
          <form>
            <input
              onClick={this.handleSignInClick}
              type="submit"
              value="Sign In"
            ></input>
          </form>
        </>
      );
    }
    return (
      <div>
        {logDetails}
        {/* {localStorage.getItem("cpiiitkUserName")} */}
        {this.state.redirectSignIn ? <Redirect to="/signin"></Redirect> : null}
        <div>{this.props.children}</div>
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
    setUserToLogged: (loggedOut) =>
      dispatch(actions.setUserToLogged(loggedOut)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hoc);
