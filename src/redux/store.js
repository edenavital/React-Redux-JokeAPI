import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import jokeReducer from "./joke/jokeReducer";

const store = createStore(
  jokeReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
