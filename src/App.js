import React, { useState } from "react";
import "./App.css";
import CodeArea from "./components/codeArea/CodeArea";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CodeArea />
      </div>
    );
  }
}

export default App;
