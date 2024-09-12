import { combineReducers, createStore } from "redux";
import { productsSlice } from "./reducers/productsSlice";
import { cartSlice } from "./reducers/cartSlice";
import { wishlistSlice } from "./reducers/wishlistSlice";

const reducer = combineReducers({
    products: productsSlice,
    cartItems: cartSlice,
    wishlist: wishlistSlice,
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());