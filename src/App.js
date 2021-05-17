import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Contests from "./components/contests/Contests";
import SetQuestion from "./components/addQuestion/SetQues";
import Question from "./components/question/Question";
import CreateContest from "./components/createContest/CreateContest";
import ContestPage from "./components/contestPage/ContestPage";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/question" component={Question} />
        {/* <Route path="/setQuestion" component={SetQuestion} /> */}
        <Route path="/addQuestion" component={SetQuestion} />
        <Route path="/createContest" component={CreateContest} />
        <Route path="/contests" component={Contests} />
        <Route path="/" component={ContestPage} />
      </Switch>
    );
  }
}

export default App;
