import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import ShowContests from "./ShowContests";
import { Redirect } from "react-router";

const ContestPage = (props) => {
  useEffect(() => {
    props.fetchAllContests();
  }, [props.isRefreshed]);

  // var showQuestions = (id, index) => {
  //   console.log("index ", index);
  // };

  if (props.goToContest === true) {
    return <Redirect to="/contest" />;
  } else {
    return (
      <div>
        <h3>Contest List</h3>
        <ShowContests />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    goToContest: state.contestPage.goToContest,
    contestId: state.contestPage.constestId,
    isRefreshed: state.contestPage.onRefresh,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllContests: () => dispatch(actions.fetchAllContests()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestPage);
