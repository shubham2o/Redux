import { createSlice } from "@reduxjs/toolkit";

const findWishlistIndex = (state, action) => {
    return state.findIndex((wishlistItem) => wishlistItem.productId === action.payload.productId);
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        toggleWishlist: (state, action) => {
            const existingWishlistIndex = findWishlistIndex(state, action);

            if (existingWishlistIndex !== -1) {
                state.splice(existingWishlistIndex, 1);
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
    },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;