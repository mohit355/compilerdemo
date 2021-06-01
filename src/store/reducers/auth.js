import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isRegister: false,
  isUserLogedIn: 10,
};

const onSignUpClick = (state, action) => {
  return { ...state, isRegister: action.data };
};

const onSignInClick = (state, action) => {
  return { ...state, isUserLogedIn: action.data };
};

const setuserToLogged = (state, action) => {
  return { ...state, isUserLogedIn: action.data };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_SIGN_UP_CLICK:
      return onSignUpClick(state, action);

    case actionTypes.ON_SIGN_IN_CLICK:
      return onSignInClick(state, action);

    case actionTypes.SET_USER_TO_LOGGED:
      return setuserToLogged(state, action);
    default:
      return state;
  }
};

export default reducer;
