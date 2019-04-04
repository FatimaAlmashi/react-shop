import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/products/");
      const products = res.data;
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: products
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterProducts = query => {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    payload: query
  };
};
