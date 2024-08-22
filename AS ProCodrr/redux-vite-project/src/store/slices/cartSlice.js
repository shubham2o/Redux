import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) => {
    return state.findIndex((cartItem) => cartItem.productId === action.payload.productId);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const existingCartItemIndex = findItemIndex(state, action);

            if (existingCartItemIndex !== -1) {
                state[existingCartItemIndex].quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },

        removeItem: (state, action) => {
            const existingCartItemIndex = findItemIndex(state, action);

            if (existingCartItemIndex !== -1) {
                state.splice(existingCartItemIndex, 1);
            }
        },

        increaseItemQuantity: (state, action) => {
            const existingCartItemIndex = findItemIndex(state, action);

            if (existingCartItemIndex !== -1) {
                state[existingCartItemIndex].quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },

        decreaseItemQuantity: (state, action) => {
            const existingCartItemIndex = findItemIndex(state, action);

            if (existingCartItemIndex !== -1) {
                state[existingCartItemIndex].quantity -= 1;

                if (state[existingCartItemIndex].quantity === 0) {
                    state.splice(existingCartItemIndex, 1);
                }
            }
        },
    },
});

export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;