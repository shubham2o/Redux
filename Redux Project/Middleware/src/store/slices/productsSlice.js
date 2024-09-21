import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        error: false,
        list: [],
    },
    reducers: {
        loadingState: (state) => {
            state.loading = true;
            state.error = false;
            state.list = [];
        },

        renderedProducts: (state, action) => {
            state.loading = false;
            state.error = false;
            state.list = action.payload;
        },

        errorState: (state) => {
            state.loading = false;
            state.error = true;
            state.list = [];
        }
    }
});

export const { loadingState, renderedProducts, errorState } = productsSlice.actions;
export default productsSlice.reducer;