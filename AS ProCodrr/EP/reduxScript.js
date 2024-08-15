import { combineReducers, createStore } from "redux";
import { productsReducer } from "./productsReducer";
import { CART_ADD_ITEM, CART_DECREASE_ITEM_QUANTITY, CART_INCREASE_ITEM_QUANTITY, CART_REMOVE_ITEM, cartReducer } from "./cartReducer";
import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM, wishListReducer } from "./wishListReducer";

console.log(`<----- reduxScript.js ----->`);

const reducer = combineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 22, quantity: 22 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 333, quantity: 333 } });
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 22 } });
store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId: 1, quantity: 2 } });
store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId: 1 } });
store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId: 1 } });
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 4444 } });
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 4444 } });