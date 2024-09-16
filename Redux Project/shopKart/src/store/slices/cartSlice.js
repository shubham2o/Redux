import { produce } from "immer";

// Action Types
const ADD_TO_CART = "cartItems/AddItem";
const REMOVE_FROM_CART = "cartItems/RemoveItem";
const INCREASE_ITEM_QUANTITY = "cartItems/IncreaseItemQuantity";
const DECREASE_ITEM_QUANTITY = "cartItems/DecreaseItemQuantity";

// Action Creators
export const addToCart = (productData) => {
    return {
        type: ADD_TO_CART,
        payload: productData
    }
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: { id }
    }
};

export const increaseItemQuantity = (id) => {
    return {
        type: INCREASE_ITEM_QUANTITY,
        payload: { id }
    }
};

export const decreaseItemQuantity = (id) => {
    return {
        type: DECREASE_ITEM_QUANTITY,
        payload: { id }
    }
};

// Reducer
export const cartSlice = (originalState = [], action) => {
    return (
        produce(originalState, (state) => {
            const existingCartItemIndex = state.findIndex((item) => item.id === action.payload.id);

            switch (action.type) {
                case ADD_TO_CART:
                    if (existingCartItemIndex >= 0) {
                        state[existingCartItemIndex].quantity += 1
                        break;
                    }
                    state.push({ ...action.payload, quantity: 1 });
                    break;

                case REMOVE_FROM_CART:
                    state.splice(existingCartItemIndex, 1);
                    break;

                case INCREASE_ITEM_QUANTITY:
                    state[existingCartItemIndex].quantity += 1
                    break;

                case DECREASE_ITEM_QUANTITY:
                    state[existingCartItemIndex].quantity <= 1
                        ? state.splice(existingCartItemIndex, 1)
                        : state[existingCartItemIndex].quantity -= 1
                    break;
            }

            return state;
        })
    )
};