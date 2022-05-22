import { createResource } from "redux-rest-resource";
// import { setAuthHeader } from "../../helpers/authStorage";

import { ART_URL } from "../../constants/config";
// import { getAuthData } from "../../helpers/authStorage";

export const { types, actions, rootReducer } = createResource({
  name: "artists",

  actions: {
    fetch: {
      method: "GET",
      url: `${ART_URL}/Artists-by-Nation/ukrainian/:page?json=1&pagesize=50`,
      reduce: (state, action) => {
        if (action.status === "resolved") {
          console.log(action);
          return {
            ...state,
            items: action.payload.body,
          };
        }
        return state;
      },
    },
    selectOne: {
      isPure: true,
      reduce: (state, action) => {
        if (action.status === "resolved") {
          console.log(action);
          return {
            ...state,
            item: action.context,
          };
        }
        return state;
      },
    },
    fetchOne: {
      method: "GET",
      url: `${ART_URL}/:id?json=2`,
      reduce: (state, action) => {
        if (action.status === "resolved") {
          console.log(action);
          return {
            ...state,
            item: action.payload.body,
          };
        }
        return state;
      },
    },
  },
});

// setAuthHeader(getAuthData().accessToken);
