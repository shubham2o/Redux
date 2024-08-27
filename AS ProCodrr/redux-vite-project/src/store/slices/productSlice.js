import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk('products', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        error: false,
        list: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsData.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchProductsData.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.list = action.payload;
            })
            .addCase(fetchProductsData.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
});

export const getProductLoadingState = ({ products }) => products.loading;
export const getAllProducts = ({ products }) => products.list;
export const getProductErrorState = ({ products }) => products.error;

export default productSlice.reducer;