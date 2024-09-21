import { createSlice } from "@reduxjs/toolkit";

const existingCartItemIndex = (state, action) => {
    return state.findIndex((item) => item.productId === action.payload.productId);
};

const cartSlice = createSlice({
    name: 'cartItems',
    initialState: [],
    reducers: {
        renderedCartItems: (state, action) => {
            return action.payload.products;
        },

        addToCart: (state, action) => {
            const existing = existingCartItemIndex(state, action);
            existing >= 0 ? state[existing].quantity += 1 : state.push({ ...action.payload, quantity: 1 });
        },

        removeFromCart: (state, action) => {
            const existing = existingCartItemIndex(state, action);
            state.splice(existing, 1);
        },

        increaseItemQuantity: (state, action) => {
            const existing = existingCartItemIndex(state, action);
            state[existing].quantity += 1;
        },

        decreaseItemQuantity: (state, action) => {
            const existing = existingCartItemIndex(state, action);
            state[existing].quantity <= 1 ? state.splice(existing, 1) : state[existing].quantity -= 1;
        },
    },
});

export const { renderedCartItems, addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;