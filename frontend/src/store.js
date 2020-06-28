import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {cart:{cartItems}};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;