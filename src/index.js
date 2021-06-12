import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import contestsReducer from "./store/reducers/contests";
import contestPageReducer from "./store/reducers/contestPage";
import authentication from "./store/reducers/auth";
import judge from "./store/reducers/judge";
import "./index.css";
import App from "./App";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  contest: contestsReducer,
  contestPage: contestPageReducer,
  auth: authentication,
  judge: judge,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

process.env.CI = false;
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
