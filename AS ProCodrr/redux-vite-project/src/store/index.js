import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import { logger } from './middleware/logger';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cartItems: cartReducer,
        wishlist: wishlistReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});