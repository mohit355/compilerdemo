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
import Hoc from "./components/HOC/Hoc";
import * as actions from "./store/actions/actions";

import { connect } from "react-redux";

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
      console.log("====================================");
      console.log(userName, email);
      console.log("====================================");
    }
  }

  render() {
    return (
      <div>
        <Switch>
          {!this.props.isuserLogged === 10 ? (
            <Hoc>
              <Route path="/contest" component={Contest} />
              <Route path="/editor" component={CodeArea} />
              <Route path="/question" component={Question} />
              <Route path="/setQuestion" component={SetQuestion} />
              <Route path="/addContest" component={AddContest} />
            </Hoc>
          ) : (
            <Hoc>
              <Route exact path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Hoc>
          )}

          <Route path="/editor" component={CodeArea} />
        </Switch>
        <Route exact path="/" component={ContestPage} />
        {/* <Redirect to="/" /> */}
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
    setUserToLogged: (loggedIn) => dispatch(actions.setUserToLogged(loggedIn)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
