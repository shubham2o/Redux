import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk('products', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        return response.json();
    }
    catch (err) {
        return err;
    }
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        list: [],
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsData.pending, (state) => {
                state.loading = true;
                state.list = [];
                state.error = false;
            })
            .addCase(fetchProductsData.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
                state.error = false;
            })
            .addCase(fetchProductsData.rejected, (state) => {
                state.loading = false;
                state.list = [];
                state.error = true;
            })
    }
});

export const loadingProductsSelector = ({ products }) => products.loading;
export const renderedProductsSelector = ({ products }) => products.list;
export const errorProductsSelector = ({ products }) => products.error;

export default productsSlice.reducer;