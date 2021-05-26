import React, { Component } from "react";
import CodeArea from "./codeArea/CodeArea";
import SampleInputOutput from "./sampleInputOutput/SampleInputOutput";
import { connect } from "react-redux";
import "./Question.css";
import * as actions from "../../store/actions/actions";

class Question extends Component {
  //
  componentDidMount() {
    window.onbeforeunload = function (x) {
      return "";
    };
    this.props.onQuestionClick(sessionStorage.getItem("qid"));
  }

  render() {
    return (
      <div className="question">
        <div>
          <div>{this.props.prblmStatement} </div>
          <SampleInputOutput sample={this.props.prblmSampleTest} />
          <CodeArea qid={this.props.qid} isReload={false} />
        </div>
      </div>
    );
  }
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
  return {
    onQuestionClick: (qid) => dispatch(actions.handleQuestionOpen(qid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
