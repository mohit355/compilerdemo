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
  const [HiddenTests, setHiddenTests] = useState([]);
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
    const prev = [...HiddenTests, ...temp];
    setHiddenTests(prev);
  }
  function questionIDChangeHandler(event) {
    setQuestionID(event.target.value);
  }
  function submitHandler(event) {
    event.prevenDefault();
    var data = {
      qid: questionID,
      stmt: statement,
      title: title,
    };
    // let n = sampleTests.length;
    // var i;

    // for (i = 0; i < n; i++) {
    //   const new_data = { ...data, ["STest" + i]: sampleTests[i] };
    //   data = new_data;
    // }
    // n = HiddenTests.length;
    // for (i = 0; i < n; i++) {
    //   const new_data = { ...data, ["HTest" + i]: HiddenTests[i] };
    //   data = new_data;
    // }
    querystring.stringify(data);
    Axios.post("/setQues", querystring.stringify(data));
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
