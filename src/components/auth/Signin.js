import React, { Component } from "react";

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            User Name :
            <input type="text" required />
          </label>
          <br />

          <label>
            Email :
            <input type="email" required />
          </label>
          <br />
          <br />

          <input type="submit" value="SignIn" />
        </form>
      </div>
    );
  }
}
