import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        error: false,
        list: [],
    },
    reducers: {
        loadingState: (state) => {
            state.loading = true;
            state.error = false;
        },

        errorState: (state) => {
            state.loading = false;
            state.error = true;
        },

        showProducts: (state, action) => {
            state.loading = false;
            state.error = false;
            state.list = action.payload;
        },
    },
});

export const { loadingState, errorState, showProducts } = productSlice.actions;
export default productSlice.reducer;