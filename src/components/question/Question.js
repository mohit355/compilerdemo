import React, { Component } from "react";
import CodeArea from "./codeArea/CodeArea";
import SampleInputOutput from "./sampleInputOutput/SampleInputOutput";
import { connect } from "react-redux";
import "./Question.css";
import * as actions from "../../store/actions/actions";

class Question extends Component {
  // const [sample, setSample] = useState([]);

  constructor(props) {
    super(props);
    this.state = {
      sample: [],
    };
  }

  componentDidMount() {
    // console.log("hello", sessionStorage.getItem("qid"));
    // this.props.onQuestionClick(sessionStorage.getItem("qid"));
    const n = this.props.prblmSampleTest.length;
    var inp = [];
    for (var i = 0; i < n; i += 2) {
      inp.push([
        this.props.prblmSampleTest[i],
        this.props.prblmSampleTest[i + 1],
      ]);
    }

    this.setState({
      sample: inp,
    });

    window.onbeforeunload = function (x) {
      return "";
    };
  }

  static shouldComponentUpdate = () => {
    return false;
  };
  render() {
    return (
      <div className="question">
        <div>
          <div>{this.props.prblmStatement} </div>
          <SampleInputOutput sample={this.state.sample} />
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
