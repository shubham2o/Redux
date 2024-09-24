import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";

const existingCartItemIndex = (state, action) => {
    return state.list.findIndex((item) => item.productId === action.payload.productId);
};

export const fetchCartItemsData = createAsyncThunk('cartItems', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/carts/5');
        return response.json();
    }
    catch (err) {
        return err;
    }
});

const cartSlice = createSlice({
    name: 'cartItems',
    initialState: {
        loading: false,
        list: [],
        error: false,
    },
    reducers: {
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItemsData.pending, (state) => {
                state.loading = true;
                state.list = [];
                state.error = false;
            })
            .addCase(fetchCartItemsData.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload.products;
                state.error = false;
            })
            .addCase(fetchCartItemsData.rejected, (state) => {
                state.loading = false;
                state.list = [];
                state.error = true;
            })
    }
});

export const loadingCartItemsSelector = ({ cartItems }) => cartItems.loading;
export const errorCartItemsSelector = ({ cartItems }) => cartItems.error;
const existingCartItem = ({ products, cartItems }) => {
    return cartItems.list
        .map(({ productId, quantity }) => {
            const cartProduct = products.list.find((product) => product.id === productId);
            return { ...cartProduct, quantity };
        })
        .filter(({ title }) => title)
};
export const cartItemsSelector = createSelector((state) => state, existingCartItem);

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;