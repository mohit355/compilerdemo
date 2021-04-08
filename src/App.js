import React, { useState } from "react";
import "./App.css";
// import CodeArea from "./components/codeArea/CodeArea";
import Question from "./components/question/Question";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <CodeArea /> */}
        <Question />
      </div>
    );
  }
}

export default App;
