import { combineReducers } from "redux";
import { rootReducer as main } from "./resources/main";

const reducers = combineReducers({
  main,
});

const rootReducers = (state, action) => {
  return reducers(state, action);
};

export default rootReducers;
