import { act } from "react-dom/test-utils";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isRegister: false,
};

const onSignUpClick = (state, action) => {
  return { ...state, isRegister: action.data };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_SIGN_UP_CLICK:
      return onSignUpClick(state, action);

    default:
      return state;
  }
};

export default reducer;
