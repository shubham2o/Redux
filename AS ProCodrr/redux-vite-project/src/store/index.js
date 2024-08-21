import { combineReducers, createStore } from "redux";
import { productsReducer } from "./slices/productSlice";
import { cartReducer } from "./slices/cartSlice";
import { wishlistReducer } from "./slices/wishlistSlice";

const reducer = combineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishlist: wishlistReducer,
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());