import React, { useEffect, useState } from "react";
import CodeArea from "./codeArea/CodeArea";
import SampleInputOutput from "./sampleInputOutput/SampleInputOutput";
import { connect } from "react-redux";
import "./Question.css";

function Question(props) {
  const [sample, setSample] = useState([]);

  useEffect(() => {
    const n = props.prblmSampleTest.length;
    var inp = [];
    for (var i = 0; i < n; i += 2) {
      inp.push([props.prblmSampleTest[i], props.prblmSampleTest[i + 1]]);
    }
    setSample(inp);
  }, [props.prblmStatement, props.prblmTitle, props.prblmSampleTest]);

  return (
    <div className="question">
      <div>{props.prblmStatement} </div>
      <SampleInputOutput sample={sample} />
      <CodeArea qid={props.qid} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    prblmStatement: state.contest.prblmstatement,
    prblmTitle: state.contest.prblmtitle,
    qid: state.contest.qid,
    prblmSampleTest: state.contest.prblmsampletest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
