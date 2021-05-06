import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as actions from "../../../store/actions/actions";

const Qname = (props) => {
  useEffect(() => {
    console.log("=====dddddddddd===============================");
    console.log(props.qname);
    console.log(props.redirectToQuestion);
    console.log("====================================");
  }, [props.qname, props.redirectToQuestion]);

  if (props.redirectToQuestion) {
    return <Redirect to="/question" />;
  } else {
    return (
      <tr>
        <td onClick={props.onQuestionClick}>{props.name}</td>
        <td>{props.code}</td>
        <td>{props.submission}</td>
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
    onQuestionClick: (qid) => dispatch(actions.handleQuestionOpen("question3")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Qname);
