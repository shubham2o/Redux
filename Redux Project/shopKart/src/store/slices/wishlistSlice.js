import { produce } from "immer";

// Action Types
const ADD_TO_WISHLIST = "wishlist/AddItem";
const REMOVE_FROM_WISHLIST = "wishlist/RemoveItem";

// Action Creators
export const addToWishlist = (productData) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: productData
    }
};

export const removeFromWishlist = (id) => {
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: { id }
    }
};

// Reducer
export const wishlistSlice = (originalState = [], action) => {
    return (
        produce(originalState, (state) => {
            const existingWishlistItemIndex = state.findIndex((item) => item.id === action.payload.id);

            switch (action.type) {
                case ADD_TO_WISHLIST:
                    state.push({ ...action.payload });
                    break;

                case REMOVE_FROM_WISHLIST:
                    state.splice(existingWishlistItemIndex, 1);
                    break;
            }

            return state;
        })
    )
};