import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Contest from "./components/contests/Contest";
import SetQuestion from "./components/setQuestion/SetQues";
import Question from "./components/question/Question";
import AddContest from "./components/addContest/CreateContest";
import ContestPage from "./components/contestPage/ContestPage";
import CodeArea from "./components/question/codeArea/CodeArea";
import Hoc from "./components/HOC/Hoc";
import * as actions from "./store/actions/actions";
import { connect } from "react-redux";
import LogOut from "./components/auth/LogOut";
import AuthPage from "./components/auth/AuthPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var userName = localStorage.getItem("cpiiitkUserName");
    var email = localStorage.getItem("cpiiitkEmail");
    if (userName === null || email === null) {
      this.props.setUserToLogged(10);
    } else {
      this.props.setUserToLogged(1);
    }
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/signin" component={AuthPage} />
        <Route path="/signup" component={AuthPage} />
        <Route path="/auth" component={AuthPage} />
        <Route exact path="/" component={ContestPage} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isuserLogged !== 10) {
      routes = (
        <Switch>
          <Route path="/editor" component={CodeArea} />
          <Route path="/contest" component={Contest} />
          <Route path="/question" component={Question} />
          <Route path="/setQuestion" component={SetQuestion} />
          <Route path="/addContest" component={AddContest} />
          <Route path="/logout" component={LogOut} />
          <Route path="/" component={ContestPage} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Hoc>{routes}</Hoc>;
  }
}

const mapStateToProps = (state) => {
  return {
    isuserLogged: state.auth.isUserLogedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserToLogged: (loggedIn) => dispatch(actions.setUserToLogged(loggedIn)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
