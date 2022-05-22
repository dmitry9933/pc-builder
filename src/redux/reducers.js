import { combineReducers } from "redux";

import { rootReducer as main } from "./resources/main";
import { rootReducer as artists } from "./resources/artists";
// import { rootReducer as works } from "./resources/works";

const reducers = combineReducers({
  main,
  artists,
  // works,
});

const rootReducers = (state, action) => {
  return reducers(state, action);
};

export default rootReducers;
