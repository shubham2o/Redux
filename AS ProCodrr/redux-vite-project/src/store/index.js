import { combineReducers, createStore } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { wishListReducer } from "./wishListReducer";

const reducer = combineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());