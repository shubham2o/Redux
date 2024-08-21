import { produce } from "immer";

// Action Types
const WISHLIST_TOGGLE_ITEM = 'wishlist/toggleItem';

// Action Creators
export const wishlistToggle = (productData) => {
    return {
        type: WISHLIST_TOGGLE_ITEM,
        payload: productData,
    }
}

// Reducer
export const wishlistReducer = (originalState = [], action) => {
    return produce(originalState, (state) => {
        const existingWishlistIndex = state.findIndex((wishlistItem) => wishlistItem.productId === action.payload.productId);

        switch (action.type) {
            case WISHLIST_TOGGLE_ITEM: {
                if (existingWishlistIndex !== -1) {
                    state.splice(existingWishlistIndex, 1);
                    break;
                }

                state.push({ ...action.payload, quantity: 1 });
            }
        }

        return state;
    });
}