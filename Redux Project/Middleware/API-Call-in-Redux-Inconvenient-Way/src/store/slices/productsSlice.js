import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        error: false,
        list: [],
    },
    reducers: {
        loadingProducts: (state) => {
            state.loading = true;
            state.error = false;
            state.list = [];
        },

        renderedProducts: (state, action) => {
            state.loading = false;
            state.error = false;
            state.list = action.payload;
        },

        errorProducts: (state) => {
            state.loading = false;
            state.error = true;
            state.list = [];
        }
    }
});

export const loadingProductsSelector = ({ products }) => products.loading;
export const renderedProductsSelector = ({ products }) => products.list;
export const errorProductsSelector = ({ products }) => products.error;

export const { loadingProducts, renderedProducts, errorProducts } = productsSlice.actions;
export default productsSlice.reducer;