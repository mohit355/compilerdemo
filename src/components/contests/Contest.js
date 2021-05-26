import React, { useEffect } from "react";
import "./Contest.css";
import Qname from "./questions/Qname";
import * as actions from "../../store/actions/actions";
import { connect } from "react-redux";

const Contests = (props) => {
  useEffect(() => {
    var session = sessionStorage.getItem("contestId");
    props.getContest(session);
  }, []);

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
            {props.questionIds.map((qid, index) => {
              return <Qname key={index} name={qid} qid={qid}></Qname>;
            })}
          </tbody>
        </table>
      </div>
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
    getContest: (session) => dispatch(actions.getContest(session)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contests);
