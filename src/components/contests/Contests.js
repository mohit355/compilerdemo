import React, { useEffect } from "react";
import "./Contests.css";
import Qname from "./question/Qname";
import * as actions from "../../store/actions/actions";
import { connect } from "react-redux";

const Contests = (props) => {
  useEffect(() => {
    console.log("on contest ", props.questionIds[1]);
  }, [props.questionIds]);

  return (
    <div className="contests">
      <div className="contests_questions">
        <table>
          <thead>
            <tr>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            {props.questionIds[1].map((qid, index) => {
              return <Qname key={index} name={qid} qid={qid}></Qname>;
            })}
          </tbody>
        </table>
      </div>
      <div className="contests_rank">rank</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    questionIds: state.contestPage.questionIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContests: () => dispatch(actions.fetchContest()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contests);
