import axios from "../../axios";
import * as actionTypes from "./actionTypes";

export const setJudgeData = (data) => {
  return {
    type: actionTypes.SET_JUDGE_DATA,
    data: data,
  };
};

export const errorInSetJudgeData = (error) => {};

export const getJudgeData = (data) => {
  return async (dispatch) => {
    await axios
      .post("/judge", data)
      .then((result) => {
        console.log("result: ", result.data);
        dispatch(setJudgeData(result.data));
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  };
};
