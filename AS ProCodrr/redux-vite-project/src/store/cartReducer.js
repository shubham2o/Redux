// Action Types
const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';

// Action Creators
export const addItemToCart = (productData) => {
    return {
        type: CART_ADD_ITEM,
        payload: productData,
    }
}

export const removeItemFromCart = (productId) => {
    return {
        type: CART_REMOVE_ITEM,
        payload: { productId }
    }
}

// Reducer
export const cartReducer = (state = [], action) => {
    const existingItem = state.find((cartItem) => cartItem.productId === action.payload.productId);

    switch (action.type) {
        case CART_ADD_ITEM: {
            if (existingItem) {
                return state.map((cartItem) => cartItem.productId === existingItem.productId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
            }
            return [...state, { ...action.payload, quantity: 1 }]
        }

        case CART_REMOVE_ITEM: {
            return state
                .map((cartItem) => cartItem.productId === action.payload.productId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
                .filter((cartItem) => cartItem.quantity > 0);
        }

        default:
            return state;
    }
}