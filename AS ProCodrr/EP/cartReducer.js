export const CART_ADD_ITEM = 'cart/addItem';
export const CART_REMOVE_ITEM = 'cart/removeItem';
export const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity';
export const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity';

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            return [...state, action.payload]

        case CART_REMOVE_ITEM:
            return state.filter((cartItem) => cartItem.productId !== action.payload.productId)

        case CART_INCREASE_ITEM_QUANTITY:
            return state.map((cartItem) => cartItem.productId === action.payload.productId ? action.payload : cartItem);

        case CART_DECREASE_ITEM_QUANTITY:
            return state
                .map((cartItem) => cartItem.productId === action.payload.productId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
                .filter((cartItem) => cartItem.quantity > 0);

        default:
            return state;
    }
}