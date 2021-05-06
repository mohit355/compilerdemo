import * as actionTypes from "../actions/actionTypes";

const initialState = {
  prblmstatement: "",
  prblmtitle: "",
  prblmsampletest: [],
  redirectTOQuestion: false,
};

const showQuestion = (state, action) => {
  const updatedState = {
    prblmstatement: action.statement,
    prblmtitle: action.title,
    prblmsampletest: action.sampleTest,
    redirectTOQuestion: true,
  };
  console.log(state.redirectTOQuestion);
  return { ...state, ...updatedState };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUESTIONS:
      return showQuestion(state, action);
    default:
      return state;
  }
};

export default reducer;
