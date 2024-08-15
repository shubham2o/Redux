import { combineReducers, createStore } from "redux";
import { productsReducer } from "./productsReducer";
import { addItemToCart, cartReducer, decreaseQuantityOfCartItems, increaseQuantityOfCartItems, removeItemFromCart } from "./cartReducer";
import { addItemToWishList, removeItemFromWishList, wishListReducer } from "./wishListReducer";

const reducer = combineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// store.dispatch(addItemToCart(101));
// store.dispatch(addItemToCart(202, 2));
// store.dispatch(addItemToCart(303, 3));
// store.dispatch(removeItemFromCart(202));
// store.dispatch(increaseQuantityOfCartItems(101, 2));
// store.dispatch(decreaseQuantityOfCartItems(101));
// store.dispatch(decreaseQuantityOfCartItems(101));
// store.dispatch(addItemToWishList(404, 4));
// store.dispatch(removeItemFromWishList(404));