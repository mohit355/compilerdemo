import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as actions from "../../../store/actions/actions";

const Qname = (props) => {
  useEffect(() => {
    console.log("=====dddddddddd===============================");
    console.log("name", props.qname);
    console.log(props.redirectToQuestion);
    console.log("====================================");
  }, [props.qname, props.redirectToQuestion]);

  if (props.redirectToQuestion) {
    return <Redirect to="/question" />;
  } else {
    return (
      <tr>
        <td onClick={() => props.onQuestionClick(props.qid)}>{props.qid}</td>
      </tr>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    qname: state.contest.prblmstatement,
    redirectToQuestion: state.contest.redirectTOQuestion,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onQuestionClick: (qid) => dispatch(actions.handleQuestionOpen(qid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Qname);
