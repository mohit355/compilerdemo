import React, { useEffect, useState } from "react";
import * as actions from "../../store/actions/actions";
import { connect } from "react-redux";

const ShowContests = (props) => {
  const [contestIds, setContestIds] = useState([]);

  useEffect(() => {
    var key = [];
    var value = [];
    var id = [];
    var qids = [];

    Object.keys(props.contestId).map((keys) => {
      key.push(keys);
      return null;
    });
    Object.values(props.contestId).map((values) => {
      value.push(values);
      return null;
    });

    value.forEach((element) => {
      var arr = [];
      Object.values(element).map((values) => {
        arr.push(values.stringValue);
        return null;
      });
      qids = [...qids, arr];
    });
    for (var i = 0; i < key.length; i++) {
      id.push([key[i], qids[i]]);
    }
    setContestIds(id);
  }, [props.contestId, props.questionIds]);

  return (
    <div>
      {contestIds.map((id) => {
        return (
          <p
            key={id[0]}
            onClick={() => props.showContestQuestionsCode(id[0], id[1])}
          >
            {id[0]}
          </p>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contestId: state.contestPage.constestId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showContestQuestionsCode: (contestId, qids) =>
      dispatch(actions.showContestQuestionsCode(contestId, qids)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowContests);
