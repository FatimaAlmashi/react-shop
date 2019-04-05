import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import serviceWorker from "./serviceWorker";
// Reducers
import productReducer from "../src/store/reducers/product";
import productsReducer from "../src/store/reducers/products";
// import authReducer from "../store/reducers/authentication";

import "./index.css";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const rootReducer = combineReducers({
  rootProduct: productReducer,
  rootProducts: productsReducer
  // rootAuth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();
