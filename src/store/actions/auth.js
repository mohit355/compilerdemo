import querystring from "querystring";
import axios from "../../axios";
import * as actionTypes from "./actionTypes";

export const signUpSuccessfully = (isRegister) => {
  return {
    type: actionTypes.ON_SIGN_UP_CLICK,
    data: isRegister,
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
