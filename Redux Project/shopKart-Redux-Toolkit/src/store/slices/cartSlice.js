import { createSlice } from "@reduxjs/toolkit";

const existingCartItemIndex = (state, action) => {
    return state.findIndex((item) => item.id === action.payload.id);
};

const cartSlice = createSlice({
    name: 'cartItems',
    initialState: [],
    reducers: {
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

const myCreateSlice = (config) => {
    const { name, initialState, reducers } = config;
    const actions = {};
};

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;