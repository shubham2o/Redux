import { produce } from "immer";

// Action Types
const CART_ADD_ITEM = 'cart/addItem';
const CART_DECREASE_QUANTITY = 'cart/decreaseQuantity';
const CART_REMOVE_ITEM = 'cart/removeItem';

// Action Creators
export const addToCart = (productData) => {
    return {
        type: CART_ADD_ITEM,
        payload: productData,
    }
}

export const decreaseCartItemQuantity = (productId) => {
    return {
        type: CART_DECREASE_QUANTITY,
        payload: { productId }
    }
}

export const removeFromCart = (productId) => {
    return {
        type: CART_REMOVE_ITEM,
        payload: { productId }
    }
}

// Reducer
export const cartReducer = (originalState = [], action) => {
    return produce(originalState, (state) => {
        const existingCartItemIndex = state.findIndex((cartItem) => cartItem.productId === action.payload.productId);

        switch (action.type) {
            case CART_ADD_ITEM: {
                if (existingCartItemIndex !== -1) {
                    state[existingCartItemIndex].quantity += 1;
                    break;
                }

                state.push({ ...action.payload, quantity: 1 });
                break;
            }

            case CART_DECREASE_QUANTITY: {
                state[existingCartItemIndex].quantity -= 1;

                if (state[existingCartItemIndex].quantity === 0) {
                    state.splice(existingCartItemIndex, 1);
                    break;
                }

                break;
            }

            case CART_REMOVE_ITEM: {
                state.splice(existingCartItemIndex, 1);
                break;
            }

            default:
                break;
        }

        return state;
    })
}