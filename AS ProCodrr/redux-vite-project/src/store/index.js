import { configureStore } from '@reduxjs/toolkit';
import productsSlice from "./slices/productSlice";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";
import { logger } from './middleware/logger';

export const store = configureStore({
    reducer: {
        products: productsSlice,
        wishlist: wishlistSlice,
        cartItems: cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});