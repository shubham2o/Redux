import { combineReducers, createStore } from "redux";
import { productsSlice } from "./reducers/productsSlice";
import { cartSlice, addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } from "./reducers/cartSlice";
import { wishlistSlice, addToWishlist, removeFromWishlist } from "./reducers/wishlistSlice";

const reducer = combineReducers({
    products: productsSlice,
    cartItems: cartSlice,
    wishlist: wishlistSlice,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// -------------------- ADD_TO_CART --------------------
store.dispatch(addToCart(6));
store.dispatch(addToCart(10));
store.dispatch(addToCart(18, 2));

// -------------------- REMOVE_FROM_CART --------------------
store.dispatch(removeFromCart(10));

// -------------------- INCREASE_ITEM_QUANTITY --------------------
store.dispatch(increaseItemQuantity(18));
store.dispatch(increaseItemQuantity(6));

// -------------------- DECREASE_ITEM_QUANTITY --------------------
store.dispatch(decreaseItemQuantity(6));
store.dispatch(decreaseItemQuantity(6));

// -------------------- ADD_TO_WISHLIST --------------------
store.dispatch(addToWishlist(18, "Cricket Bat"));
store.dispatch(addToWishlist(10, "Football"));

// -------------------- REMOVE_FROM_WISHLIST --------------------
store.dispatch(removeFromWishlist(10));