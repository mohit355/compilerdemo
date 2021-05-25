import * as actionTypes from "../actions/actionTypes";

const initialState = {
  constestId: {},
  onRefresh: true,
  questionIds: [],
  goToContest: false,
};

const getContests = (state, action) => {
  const updatedState = {
    constestId: action.data,
    onRefresh: false,
  };
  return { ...state, ...updatedState };
};

const setQuestionsCode = (state, action) => {
  const updatedState = {
    // questionIds: [action.contestId, action.qids],
    questionIds: action.qids,
    goToContest: true,
  };

  return { ...state, ...updatedState };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTESTS:
      return getContests(state, action);

    case actionTypes.SET_CONTEST_QUESTIONS_CODE:
      return setQuestionsCode(state, action);

    default:
      return state;
  }
};

export default reducer;
