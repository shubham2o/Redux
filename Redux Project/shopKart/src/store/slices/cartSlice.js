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
export const cartSlice = (state = [], action) => {
    const existingCartItem = state.find((item) => item.id === action.payload.id);

    switch (action.type) {
        case ADD_TO_CART:
            if (existingCartItem) {
                return state.map((item) => item === existingCartItem ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...state, { ...action.payload, quantity: 1 }];

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