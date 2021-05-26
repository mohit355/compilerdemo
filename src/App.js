import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Contest from "./components/contests/Contest";
import SetQuestion from "./components/setQuestion/SetQues";
import Question from "./components/question/Question";
import AddContest from "./components/addContest/CreateContest";
import ContestPage from "./components/contestPage/ContestPage";
import CodeArea from "./components/question/codeArea/CodeArea";
import Authenticate from "./components/auth/Authenticate";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ContestPage} />

        <Authenticate>
          <Route path="/contest" component={Contest} />
          <Route path="/editor" component={CodeArea} />
          <Route path="/question" component={Question} />
          <Route path="/setQuestion" component={SetQuestion} />
          <Route path="/addContest" component={AddContest} />
        </Authenticate>
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
