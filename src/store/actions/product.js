import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

const setLoading = () => ({
  type: actionTypes.SET_PRODUCT_LOADING
});

export const fetchProductDetail = productID => {
  return async dispatch => {
    dispatch(setLoading());
    try {
      const res = await instance.get(`/api/products/${productID}/`);
      const product = res.data;

      dispatch({
        type: actionTypes.FETCH_PRODUCT_DETAIL,
        payload: product
      });
    } catch (error) {
      console.error(error);
    }
  };
};
