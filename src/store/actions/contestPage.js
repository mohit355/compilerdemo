import axios from "../../axios";
import * as actionTypes from "./actionTypes";

export const setContestQuestions = (datas) => {
  return {
    type: actionTypes.GET_CONTESTS,
    data: datas,
  };
};

export const showContestQuestionsCode = (contestId, qids) => {
  return {
    type: actionTypes.SET_CONTEST_QUESTIONS_CODE,
    contestId: contestId,
    qids: qids,
  };
};

export const fetchContest = () => {
  return (dispatch) => {
    axios
      .get("/fetchContests")
      .then((res) => {
        dispatch(setContestQuestions(res.data));
      })
      .catch((error) => {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      });
  };
};
