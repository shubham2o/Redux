import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import { logger } from "./middleware/logger";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cartItems: cartSlice,
        wishlist: wishlistSlice,
    },
    middleware: () => [logger],
});