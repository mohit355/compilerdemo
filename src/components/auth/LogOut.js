import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import { Redirect } from "react-router";

class LogOut extends Component {
  handleLogOutClick = (event) => {
    event.preventDefault();
    localStorage.removeItem("cpiiitkUserName");
    localStorage.removeItem("cpiiitkEmail");
    console.log("====================================");
    console.log("LOGIUT");
    console.log("====================================");
    this.props.setUserToLogged(10);
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="submit"
            value="LogOut"
            onClick={this.handleLogOutClick}
          ></input>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
