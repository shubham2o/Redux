// Action Types
const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';
const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity';
const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity';

// Action Creators
export const addItemToCart = (productId, quantity = 1) => {
    return {
        type: CART_ADD_ITEM,
        payload: { productId, quantity }
    }
}

export const removeItemFromCart = (productId) => {
    return {
        type: CART_REMOVE_ITEM,
        payload: { productId }
    }
}

export const increaseQuantityOfCartItems = (productId, quantity) => {
    return {
        type: CART_INCREASE_ITEM_QUANTITY,
        payload: { productId, quantity }
    }
}

export const decreaseQuantityOfCartItems = (productId) => {
    return {
        type: CART_DECREASE_ITEM_QUANTITY,
        payload: { productId },
    }
}

// Reducer
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