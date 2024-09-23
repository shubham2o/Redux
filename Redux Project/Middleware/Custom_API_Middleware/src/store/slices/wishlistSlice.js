import { createSlice, createSelector } from "@reduxjs/toolkit";

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

const existingWishlist = ({ products, wishlist }) => {
    return wishlist.map(({ productId }) => {
        const wishlistProduct = products.list.find((item) => item.id === productId);
        return wishlistProduct;
    })
}
export const wishlistSelector = createSelector((state) => state, existingWishlist);

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;