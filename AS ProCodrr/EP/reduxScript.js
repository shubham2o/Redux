import { createStore } from "redux";
import { productsList } from "./productsList";

console.log(`<----- reduxScript.js ----->`);

const initialState = {
    products: productsList,
    cartItems: [
        {
            productId: 0,
            quantity: 0,
        }
    ],
    wishList: [],
}

const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';
const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity';
const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity';

const WISHLIST_ADD_ITEM = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            return { ...state, cartItems: [...state.cartItems, action.payload] }

        case CART_REMOVE_ITEM:
            return { ...state, cartItems: state.cartItems.filter((cartItem) => cartItem.productId !== action.payload.productId) }

        case CART_INCREASE_ITEM_QUANTITY:
            return {
                ...state, cartItems:
                    state.cartItems.map((cartItem) => cartItem.productId === action.payload.productId ? action.payload : cartItem)
            }

        case CART_DECREASE_ITEM_QUANTITY:
            return {
                ...state, cartItems:
                    state.cartItems
                        .map((cartItem) => cartItem.productId === action.payload.productId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
                        .filter((cartItem) => cartItem.quantity > 0)
            }

        case WISHLIST_ADD_ITEM:
            return { ...state, wishList: [...state.wishList, action.payload] }

        case WISHLIST_REMOVE_ITEM:
            return { ...state, wishList: state.wishList.filter((wishListItem) => wishListItem.productId != action.payload.productId) }

        default:
            return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 22, quantity: 22 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 333, quantity: 333 } });
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 22 } });
store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId: 1, quantity: 100000 } });
store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId: 333 } });
store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId: 333 } });
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 4444 } });
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 4444 } });