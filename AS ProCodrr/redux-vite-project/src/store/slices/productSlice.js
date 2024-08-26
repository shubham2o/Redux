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

        productState: (state, action) => {
            state.loading = false;
            state.error = false;
            state.list = action.payload;
        },
    },
});

export const getProductLoadingState = ({ products }) => products.loading;
export const getProductErrorState = ({ products }) => products.error;
export const getAllProducts = ({ products }) => products.list;

export const { loadingState, errorState, productState } = productSlice.actions;
export default productSlice.reducer;