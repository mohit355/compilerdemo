import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Contest from "./components/contests/Contest";
import SetQuestion from "./components/setQuestion/SetQues";
import Question from "./components/question/Question";
import AddContest from "./components/addContest/CreateContest";
import ContestPage from "./components/contestPage/ContestPage";
import CodeArea from "./components/question/codeArea/CodeArea";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: true,
    };
  }
  render() {
    return (
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/contest" component={Contest} />
        <Route path="/editor" component={CodeArea} />
        <Route path="/question" component={Question} />
        <Route path="/setQuestion" component={SetQuestion} />
        <Route path="/addContest" component={AddContest} />
        <Route path="/" component={ContestPage} />

        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
