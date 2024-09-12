// Action Types
export const ADD_TO_CART = "cartItems/AddItem";
export const REMOVE_FROM_CART = "cartItems/RemoveItem";
export const INCREASE_ITEM_QUANTITY = "cartItems/IncreaseItemQuantity";
export const DECREASE_ITEM_QUANTITY = "cartItems/DecreaseItemQuantity";

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
}