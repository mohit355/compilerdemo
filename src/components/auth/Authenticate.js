import React, { Component } from "react";

export default class Authenticate extends Component {
  render() {
    return (
      <div>
        {localStorage.getItem("cpiiitkUserName")}
        {/* {localStorage.getItem("cpiiitkEmail")} */}
        <div>{this.props.children}</div>
      </div>
    );
  }
}
