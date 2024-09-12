import { combineReducers, createStore } from "redux";
import { productsSlice } from "./reducers/productsSlice";
import { cartSlice, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY } from "./reducers/cartSlice";
import { wishlistSlice, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./reducers/wishlistSlice";

const reducer = combineReducers({
    products: productsSlice,
    cartItems: cartSlice,
    wishlist: wishlistSlice,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// -------------------- ADD_TO_CART --------------------
store.dispatch({ type: ADD_TO_CART, payload: { id: 18, quantity: 1 } });
store.dispatch({ type: ADD_TO_CART, payload: { id: 10, quantity: 1 } });
store.dispatch({ type: ADD_TO_CART, payload: { id: 6, quantity: 1 } });

// -------------------- REMOVE_FROM_CART --------------------
store.dispatch({ type: REMOVE_FROM_CART, payload: { id: 10 } });

// -------------------- INCREASE_ITEM_QUANTITY --------------------
store.dispatch({ type: INCREASE_ITEM_QUANTITY, payload: { id: 18 } });
store.dispatch({ type: INCREASE_ITEM_QUANTITY, payload: { id: 6 } });

// -------------------- DECREASE_ITEM_QUANTITY --------------------
store.dispatch({ type: DECREASE_ITEM_QUANTITY, payload: { id: 6 } });
store.dispatch({ type: DECREASE_ITEM_QUANTITY, payload: { id: 6 } });

// -------------------- ADD_TO_WISHLIST --------------------
store.dispatch({ type: ADD_TO_WISHLIST, payload: { id: 18, product: "Cricket Bat" } });
store.dispatch({ type: ADD_TO_WISHLIST, payload: { id: 10, product: "Football" } });

// -------------------- REMOVE_FROM_WISHLIST --------------------
store.dispatch({ type: REMOVE_FROM_WISHLIST, payload: { id: 10 } });