import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./reducers";
// import { fetchInterceptor } from "./interceptor";

//eslint-disable-next-line
// const Interceptor = fetchInterceptor;

const configureStore = (initialState) => {
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

export default configureStore;
