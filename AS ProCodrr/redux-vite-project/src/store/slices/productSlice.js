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

        productState: (state, action) => {
            state.loading = false;
            state.error = false;
            state.list = action.payload;
        },

        errorState: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const getProductLoadingState = ({ products }) => products.loading;
export const getAllProducts = ({ products }) => products.list;
export const getProductErrorState = ({ products }) => products.error;

const { loadingState, productState, errorState } = productSlice.actions;
export default productSlice.reducer;

// Thunk Action Creator
export const fetchProductsData = () => (dispatch) => {
    dispatch(loadingState());

    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => dispatch(productState(data)))
        .catch(() => dispatch(errorState()))
}