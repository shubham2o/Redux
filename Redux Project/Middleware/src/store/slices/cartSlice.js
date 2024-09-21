import { createSlice } from "@reduxjs/toolkit";

const existingCartItemIndex = (state, action) => {
    return state.list.findIndex((item) => item.productId === action.payload.productId);
};

const cartSlice = createSlice({
    name: 'cartItems',
    initialState: {
        loading: false,
        error: false,
        list: [],
    },
    reducers: {
        loadingCartItems: (state) => {
            state.loading = true;
            state.error = false;
            state.list = [];
        },

        renderedCartItems: (state, action) => {
            state.loading = false;
            state.error = false;
            state.list = action.payload.products;
        },

        errorCartItems: (state) => {
            state.loading = false;
            state.error = true;
            state.list = [];
        },

        addToCart: (state, action) => {
            state.loading = false;
            state.error = false;
            const existing = existingCartItemIndex(state, action);
            existing >= 0 ? state.list[existing].quantity += 1 : state.list.push({ ...action.payload, quantity: 1 });
        },

        removeFromCart: (state, action) => {
            state.loading = false;
            state.error = false;
            const existing = existingCartItemIndex(state, action);
            state.list.splice(existing, 1);
        },

        increaseItemQuantity: (state, action) => {
            state.loading = false;
            state.error = false;
            const existing = existingCartItemIndex(state, action);
            state.list[existing].quantity += 1;
        },

        decreaseItemQuantity: (state, action) => {
            state.loading = false;
            state.error = false;
            const existing = existingCartItemIndex(state, action);
            state.list[existing].quantity <= 1 ? state.list.splice(existing, 1) : state.list[existing].quantity -= 1;
        }
    }
});

export const { loadingCartItems, renderedCartItems, errorCartItems, addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;