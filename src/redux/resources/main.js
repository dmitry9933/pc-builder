import { createResource } from "redux-rest-resource";
// import { setAuthHeader } from "../../helpers/authStorage";

import { API_URL } from "../../constants/config";
// import { getAuthData } from "../../helpers/authStorage";

export const { types, actions, rootReducer } = createResource({
  name: "main",
  // url: `${API_URL}/main`,

  actions: {
    get: {
      method: "GET",
      url: `${API_URL}/computerparts/:partName`,
      // transformResponse: (res,action) => {
      //   console.log(res,action)
      //   return { ...res, body: res.body };
      // },
      reduce: (state, action) => {
        if (action.status === "resolved") {
          console.log(action);
          return {
            ...state,
           [action.context.partName]: action.payload.body,
          };
        }
        return state;
      },
    },
    saveUploaded: {
      method: "POST",
    },
    cancel: {
      method: "PUT",
      url: `${API_URL}/admin/orders/:orderId/cancel`,
    },
    postpone: {
      method: "PUT",
      url: `${API_URL}/admin/orders/:orderId/postpone`,
    },
    delete: {
      method: "DELETE",
      url: `${API_URL}/admin/orders/:orderId`,
    },
    restore: {
      method: "PUT",
      url: `${API_URL}/admin/orders/restore/:orderId`,
    },
    restoreFailed: {
      method: "PATCH",
      url: `${API_URL}/admin/orders/:orderId/new`,
    },
    createReturn: {
      method: "POST",
      url: `${API_URL}/admin/orders/:orderId/return`,
    },
    completeOrder: {
      method: "PUT",
      url: `${API_URL}/admin/orders/:orderId/complete`,
    },
    bulkDelete: {
      method: "DELETE",
      url: `${API_URL}/admin/orders`,
    },
    changeLocation: {
      method: "PUT",
      url: `${API_URL}/admin/orders/:orderId/location`,
    },
    removeLocation: {
      method: "DELETE",
      url: `${API_URL}/admin/orders/:orderId/location`,
    },
    editPhone: {
      method: "PUT",
      url: `${API_URL}/admin/orders/:orderId/phone-number`,
    },
    returnToShipper: {
      method: "PUT",
      url: `${API_URL}/admin/orders/:orderId/return-to-shipper`,
    },
    getReports: {
      method: "GET",
      url: `${API_URL}/admin/orders/:id/job-reports`,
    },
    saveNotes: {
      method: "PUT",
      url: `${API_URL}/admin/orders/:orderId/notes`,
    },
    editInitialAddress: {
      method: "PUT",
      url: `${API_URL}/admin/orders/:orderId/initial-address`,
    },
    fetchOrderHistory: {
      method: "GET",
      url: `${API_URL}/admin/orders/:orderId/status-history`,
    },
    fetchReturnShipperForm: {
      method: "GET",
      url: `${API_URL}/admin/orders/:orderId/return-form`,
    },
  },
});

// setAuthHeader(getAuthData().accessToken);
