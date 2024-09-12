// Action Types
const ADD_TO_CART = "cartItems/AddItem";
const REMOVE_FROM_CART = "cartItems/RemoveItem";
const INCREASE_ITEM_QUANTITY = "cartItems/IncreaseItemQuantity";
const DECREASE_ITEM_QUANTITY = "cartItems/DecreaseItemQuantity";

// Action Creators
export const addToCart = (id, quantity = 1) => {
    return {
        type: ADD_TO_CART,
        payload: { id, quantity }
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
export const cartSlice = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter((item) => item.id !== action.payload.id);
        case INCREASE_ITEM_QUANTITY:
            return state.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item);
        case DECREASE_ITEM_QUANTITY:
            return state.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0);
        default:
            return state;
    }
};