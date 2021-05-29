import querystring from "querystring";
import axios from "../../axios";
import * as actionTypes from "./actionTypes";

export const signUpSuccessfully = (isRegister) => {
  return {
    type: actionTypes.ON_SIGN_UP_CLICK,
    data: isRegister,
  };
};

export const signInSuccessfully = (isSuccess) => {
  return {
    type: actionTypes.ON_SIGN_IN_CLICK,
    data: isSuccess,
  };
};

export const setUserToLogged = (login) => {
  return {
    type: actionTypes.SET_USER_TO_LOGGED,
    data: login,
  };
};

export const onSignInClick = (email, password) => {
  const data = {
    email: email,
    password: password,
  };
  console.log(data);
  return async (dispatch) => {
    await axios
      .post("/login", querystring.stringify(data))
      .then((res) => {
        console.log("sign in ", res);
        var isUserexist;
        if (res.data["loginSuccessFully"]) {
          isUserexist = 1;
          localStorage.setItem("cpiiitkUserName", res.data.username);
          localStorage.setItem("cpiiitkEmail", email);
        } else if (res.data["passwordWrong"]) {
          isUserexist = -1;
        } else if (res.data["userNotExist"]) {
          isUserexist = 0;
        }

        dispatch(signInSuccessfully(isUserexist));
      })
      .catch((err) => {
        console.log("register error ", err);
      });
  };
};

export const onSignUpClick = (fullName, userName, email, password) => {
  const data = {
    fullName: fullName,
    userName: userName,
    email: email,
    password: password,
  };

  return async (dispatch) => {
    await axios
      .post("/register", querystring.stringify(data))
      .then((res) => {
        var isRegister;
        if (res.data["userAlreadyExist"] === 1) {
          isRegister = false;
        } else if (res.data["userCreatedSuccessfully"] === 1) {
          isRegister = true;
        }
        dispatch(signUpSuccessfully(isRegister));
      })
      .catch((err) => {
        console.log("register error ", err);
      });
  };
};
