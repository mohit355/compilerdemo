import React, { Component } from "react";
import LogOut from "../auth/LogOut";
import NavigationItem from "./navigationItem/NavigationItem";

export default class NavigationItems extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated === 1 ? (
          <LogOut></LogOut>
        ) : (
          <>
            <NavigationItem link="/auth" exact>
              SignIn
            </NavigationItem>
            <NavigationItem link="/auth" exact>
              SignUp
            </NavigationItem>
          </>
        )}
        <NavigationItem link="/" exact>
          All contests
        </NavigationItem>
      </div>
    );
  }
}
