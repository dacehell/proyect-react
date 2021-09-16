import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_RESET,
  CREATE_PRODUCT_START,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
} from "./constants";

export const getProductsReducer = (
  state = { data: [], isLoading: "initial" },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: "loading",
        data: [],
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: "iddle",
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        isLoading: "iddle",
        error: action.payload,
      };
    case CREATE_PRODUCT_START:
      return {
        ...state,
        isLoading: "loading",
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: "succeeded",
        data: [...state.data, action.payload],
      };
    case CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: "failed",
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PRODUCT_DETAILS_RESET:
      return {
        ...state,
        product: {},
      };

    default:
      return state;
  }
};
