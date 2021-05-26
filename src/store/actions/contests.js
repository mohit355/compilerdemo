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

export const showContestQuestionsCode = (contestId, qids) => {
  return {
    type: actionTypes.SET_CONTEST_QUESTIONS_CODE,
    contestId: contestId,
    qids: qids,
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

export const getContest = (contestId) => {
  const id = { id: contestId };
  return (dispatch) => {
    axios
      .post("/getContest", querystring.stringify(id))
      .then((response) => {
        var qids = [];
        response.data.map((id) => {
          qids.push(id.stringValue);
          return 0;
        });
        console.log("get qids ", qids);
        dispatch(showContestQuestionsCode(contestId, qids));
      })
      .catch((error) => {});
  };
};

export const handleQuestionOpen = (qid) => {
  sessionStorage.setItem("qid", qid);

  const id = { id: qid };
  return (dispatch) => {
    axios
      .post("/getQuestion", querystring.stringify(id))
      .then((response) => {
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");
        const n = response.data.sample.arrayValue.values.length;
        var inp = [];
        for (var i = 0; i < n; i += 2) {
          inp.push([
            response.data.sample.arrayValue.values[i],
            response.data.sample.arrayValue.values[i + 1],
          ]);
        }

        console.log("input ", inp);

        dispatch(
          setQuestionAndEditor(
            response.data.title.stringValue,
            response.data.stmt.stringValue,
            inp,
            qid
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
