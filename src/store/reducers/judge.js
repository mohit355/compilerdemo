import * as actionTypes from "../actions/actionTypes";
const initialState = {
  codeOutput: {},
};

const setJudgeData = (state, action) => {
  return { ...state, codeOutput: action.data };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_JUDGE_DATA:
      return setJudgeData(state, action);
    default:
      return state;
  }
};

export default reducer;
