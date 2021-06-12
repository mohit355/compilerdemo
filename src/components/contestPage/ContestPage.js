import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import ShowContests from "./ShowContests";
import { Redirect } from "react-router";

const ContestPage = (props) => {
  useEffect(() => {
    props.fetchAllContests();
  }, [props.isRefreshed]);

  if (props.goToContest === true) {
    if (props.isuserLogged === 1) {
      return <Redirect to="/contest" />;
    } else {
      return <Redirect to="/auth" />;
    }
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
    isuserLogged: state.auth.isUserLogedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllContests: () => dispatch(actions.fetchAllContests()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestPage);
