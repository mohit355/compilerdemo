import React, { useState } from "react";
import "./App.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Contests from "./components/contests/Contests";
import SetQuestion from "./components/addQuestion/SetQues";
import Question from "./components/question/Question";
import CreateContest from "./components/createContest/CreateContest";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/question" component={Question} />
        <Route path="/question" component={SetQuestion} />
        {/* <Route path="/addQuestion" component={SetQuestion} /> */}
        <Route path="/createContest" component={CreateContest} />
        <Route path="/" component={Contests} />
        <Contests></Contests>;
      </Switch>
    );
  }
}

export default App;
