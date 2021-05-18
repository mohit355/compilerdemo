import React, { useState } from "react";
import Question from "./Question";
import SampleTest from "./SampleTest";
import HiddenTest from "./HiddenTest";
import Axios from "../../axios";
import querystring from "querystring";

function SetQues() {
  const [title, setTitle] = useState("");
  const [statement, setStatement] = useState("");
  const [sampleTests, setSampleTests] = useState([]);
  const [hiddenTests, setHiddenTests] = useState([]);
  const [questionID, setQuestionID] = useState("");

  function titleChangeHandler(value) {
    setTitle(value);
  }
  function statementChangeHandler(value) {
    setStatement(value);
  }
  function AddSampleTestHandler(inp, out) {
    const temp = [inp, out];
    const prev = [...sampleTests, ...temp];
    setSampleTests(prev);
  }

  function AddHiddenTestHandler(inp, out) {
    const temp = [inp, out];
    const prev = [...hiddenTests, ...temp];
    setHiddenTests(prev);
  }
  function questionIDChangeHandler(event) {
    setQuestionID(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    var data = {
      qid: questionID,
      stmt: statement,
      title: title,
      sample: sampleTests,
      hidden: hiddenTests,
    };

    querystring.stringify(data);
    Axios.post("/setQuestion", querystring.stringify(data));
  }

  return (
    <form>
      <label>
        Question ID:
        <input type="text" onChange={questionIDChangeHandler} required />
      </label>
      <Question
        titleChangeHandler={titleChangeHandler}
        statementChange={statementChangeHandler}
      />
      <SampleTest addTest={AddSampleTestHandler} />
      <HiddenTest addTest={AddHiddenTestHandler} />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
}

export default SetQues;
