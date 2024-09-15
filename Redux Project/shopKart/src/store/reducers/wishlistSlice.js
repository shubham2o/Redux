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
export const wishlistSlice = (state = [], action) => {
    const existingWishlistItem = state.find((item) => item.id === action.payload.id)

    switch (action.type) {
        case ADD_TO_WISHLIST:
            if (existingWishlistItem) {
                return state.map((item) => item === existingWishlistItem ? { ...item } : item)
            }
            return [...state, { ...action.payload }];

        case REMOVE_FROM_WISHLIST:
            return state.filter((item) => item.id !== action.payload.id);

        default:
            return state;
    }
};