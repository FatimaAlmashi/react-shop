import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  filteredProducts: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        loading: false
      };

    case actionTypes.FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => {
          return `${product.name} ${product.description} ${product.category}`
            .toLowerCase()
            .includes(action.payload);
        })
      };
    default:
      return state;
  }
};

export default reducer;
