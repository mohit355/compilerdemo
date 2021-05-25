import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Contests from "./components/contests/Contests";
import SetQuestion from "./components/addQuestion/SetQues";
import Question from "./components/question/Question";
import CreateContest from "./components/createContest/CreateContest";
import ContestPage from "./components/contestPage/ContestPage";
import CodeArea from "./components/question/codeArea/CodeArea";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/contest" component={Contests} />
        <Route path="/editor" component={CodeArea} />
        <Route path="/question" component={Question} />
        {/* <Route path="/setQuestion" component={SetQuestion} /> */}
        <Route path="/addQuestion" component={SetQuestion} />
        <Route path="/createContest" component={CreateContest} />
        <Route path="/" component={ContestPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
