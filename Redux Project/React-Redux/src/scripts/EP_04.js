import { productsList } from "./productsList";
import { createStore } from "redux";

const initialState = {
    products: productsList,
    cartItems: [],
    wishlist: [],
};

// -------------------- cartItems --------------------
const ADD_TO_CART = "cartItems/AddItem";
const REMOVE_FROM_CART = "cartItems/RemoveItem";
const INCREASE_ITEM_QUANTITY = "cartItems/IncreaseItemQuantity";
const DECREASE_ITEM_QUANTITY = "cartItems/DecreaseItemQuantity";

// -------------------- wishlist --------------------
const ADD_TO_WISHLIST = "wishlist/AddItem";
const REMOVE_FROM_WISHLIST = "wishlist/RemoveItem";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cartItems: [...state.cartItems, action.payload] }
        case REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter((item) => item.id !== action.payload.id) }
        case INCREASE_ITEM_QUANTITY: {
            return {
                ...state, cartItems: state.cartItems
                    .map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
        }
        case DECREASE_ITEM_QUANTITY: {
            return {
                ...state, cartItems: state.cartItems
                    .map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)
                    .filter((item) => item.quantity > 0)
            }
        }
        case ADD_TO_WISHLIST: {
            return { ...state, wishlist: [...state.wishlist, action.payload] }
        }
        case REMOVE_FROM_WISHLIST: {
            return { ...state, wishlist: state.wishlist.filter((item) => item.id !== action.payload.id) }
        }
        default:
            return state;
    }
};

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
store.dispatch({ type: DECREASE_ITEM_QUANTITY, payload: { id: 6 } });

// -------------------- ADD_TO_WISHLIST --------------------
store.dispatch({ type: ADD_TO_WISHLIST, payload: { id: 18, product: "Cricket Bat" } });
store.dispatch({ type: ADD_TO_WISHLIST, payload: { id: 10, product: "Football" } });

// -------------------- REMOVE_FROM_WISHLIST --------------------
store.dispatch({ type: REMOVE_FROM_WISHLIST, payload: { id: 10 } });