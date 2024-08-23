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
            existingWishlistIndex !== -1 ? state.splice(existingWishlistIndex, 1) : state.push(action.payload)
        },
    },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;