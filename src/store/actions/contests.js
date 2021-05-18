import axios from "../../axios";
import * as actionTypes from "./actionTypes";
import querystring from "querystring";

// export const initContest = (contestId) => {
//   return (dispatch) => {
//     axios
//       .get("/")
//       .then((response) => {
//         dispatch();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const setQuestionAndEditor = (
  title,
  statement,
  sampleTest,
  questionId
) => {
  return {
    type: actionTypes.SET_QUESTIONS,
    title: title,
    statement: statement,
    sampleTest: sampleTest,
    qid: questionId,
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
  return async (dispatch) => {
    await axios
      .post("/getQuestion", querystring.stringify(id))
      .then((response) => {
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");
        dispatch(
          setQuestionAndEditor(
            response.data.title.stringValue,
            response.data.stmt.stringValue,
            response.data.sample.arrayValue.values,
            qid
          )
        );
      })
      .catch((error) => {
        dispatch(error);
      });
  };
};
