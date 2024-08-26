import { configureStore } from '@reduxjs/toolkit';
import productSlice from "./slices/productSlice";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";
import { apiMiddleware } from './middleware/api';

export const store = configureStore({
    reducer: {
        products: productSlice,
        wishlist: wishlistSlice,
        cartItems: cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
});