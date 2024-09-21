import { createSlice } from "@reduxjs/toolkit";

const existingWishlistItemIndex = (state, action) => {
    return state.findIndex((item) => item.productId === action.payload.productId);
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            state.push({ ...action.payload });
        },

        removeFromWishlist: (state, action) => {
            const existing = existingWishlistItemIndex(state, action);
            state.splice(existing, 1);
        }
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;