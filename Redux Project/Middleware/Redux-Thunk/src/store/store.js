import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import { thunk } from "./middleware/thunk";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cartItems: cartSlice,
        wishlist: wishlistSlice,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk]
});