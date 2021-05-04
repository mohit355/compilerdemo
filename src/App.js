import React, { useState } from "react";
import "./App.css";
import { AddQuestion } from "./components/addQuestion/AddQuestion";
import { Contests } from "./components/contests/Contests";
import Question from "./components/question/Question";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <AddQuestion></AddQuestion> */}
        {/* <Question /> */}
        <Contests></Contests>
      </div>
    );
  }
}

export default App;
