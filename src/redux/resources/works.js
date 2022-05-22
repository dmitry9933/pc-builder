import { createResource } from "redux-rest-resource";
// import { setAuthHeader } from "../../helpers/authStorage";

import { ART_URL } from "../../constants/config";
// import { getAuthData } from "../../helpers/authStorage";

export const { types, actions, rootReducer } = createResource({
  name: "works",

  actions: {
    fetch: {
      method: "GET",
      url: `${ART_URL}/App/Painting/PaintingsByArtist?artistUrl=:id&json=2`,
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
      url: `${ART_URL}/App/Painting/ImageJson/:id?json=2`,
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
