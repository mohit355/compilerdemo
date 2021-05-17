import axios from "../../axios";
import * as actionTypes from "./actionTypes";
import querystring from "querystring";

export const initContest = (contestId) => {
  return (dispatch) => {
    axios
      .get("/")
      .then((response) => {
        dispatch();
      })
      .catch((error) => {
        dispatch();
      });
  };
};

export const setQuestionAndEditor = (title, statement, sampleTest) => {
  return {
    type: actionTypes.SET_QUESTIONS,
    title: title,
    statement: statement,
    sampleTest: sampleTest,
  };
};

export const showError = () => {
  return {
    type: actionTypes.SET_QUESTIONS,
    title: "title",
    statement: "statement",
    sampleTest: "sampleTest",
  };
};

export const handleQuestionOpen = (qid) => {
  const id = { id: qid };
  return (dispatch) => {
    axios
      .post("/getQues", querystring.stringify(id))
      .then((response) => {
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");
        dispatch(
          setQuestionAndEditor(
            response.data.title.stringValue,
            response.data.stmt.stringValue,
            response.data.sample.arrayValue.values
          )
        );
      })
      .catch((error) => {
        dispatch(showError());
      });
  };
};
