import React, { useEffect } from "react";
import CodeArea from "./codeArea/CodeArea";
import SampleInputOutput from "./sampleInputOutput/SampleInputOutput";
import { connect } from "react-redux";
import * as actions from "../../store/actions//actions";
import "./Question.css";

function Question(props) {
  useEffect(() => {
    // console.log("====================================");
    // console.log("HELLO");
    // console.log("====================================");
    // console.log("state : ", props.prblmStatement);
    // console.log(" title ", props.prblmTitle);
    console.log("test ", props.prblmSampleTest);
  }, [props.prblmStatement, props.prblmTitle, props.prblmSampleTest]);

  return (
    <div className="question">
      <div>{props.prblmStatement} </div>
      <SampleInputOutput sample={props.prblmSampleTest} />
      <CodeArea />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    prblmStatement: state.contest.prblmstatement,
    prblmTitle: state.contest.prblmtitle,
    prblmSampleTest: state.contest.prblmsampletest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
