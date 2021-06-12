import React, { Component } from "react";
import LogOut from "../auth/LogOut";
import * as actions from "../../store/actions/actions";
import { connect } from "react-redux";
import SignIn from "../auth/SignIn";
import NavigationItems from "../navigationItems/NavigationItems";
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
    var logDetails = "";
    if (this.props.isuserLogged === 1) {
      logDetails = <>{localStorage.getItem("cpiiitkUserName")}</>;
    }
    return (
      <div>
        <div>{logDetails}</div>
        <NavigationItems
          isAuthenticated={this.props.isuserLogged}
        ></NavigationItems>
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
