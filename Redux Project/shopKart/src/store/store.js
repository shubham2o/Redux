import { combineReducers, createStore } from "redux";
import { productsSlice } from "./slices/productsSlice";
import { cartSlice } from "./slices/cartSlice";
import { wishlistSlice } from "./slices/wishlistSlice";

const reducer = combineReducers({
    products: productsSlice,
    cartItems: cartSlice,
    wishlist: wishlistSlice,
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());