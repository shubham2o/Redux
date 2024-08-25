import { createSlice, createSelector } from "@reduxjs/toolkit";

const findWishlistIndex = (state, action) => {
    return state.findIndex((wishlistItem) => wishlistItem.id === action.payload.id);
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

export const getWishlistItems = (({ products, wishlist }) => {
    return wishlist.map(({ id }) => {
        const wishlistProduct = products.list.find((product) => product.id === id);
        return wishlistProduct;
    });
});

export const getAllWishlistItems = createSelector((state) => state, getWishlistItems);

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;