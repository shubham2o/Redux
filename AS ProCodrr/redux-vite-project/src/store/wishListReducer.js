// Action Types
const WISHLIST_ADD_ITEM = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

// Action Creators
export const addItemToWishlist = (productData) => {
    return {
        type: WISHLIST_ADD_ITEM,
        payload: productData,
    }
}

export const removeItemFromWishlist = (productId) => {
    return {
        type: WISHLIST_REMOVE_ITEM,
        payload: { productId }
    }
}

// Reducer
export const wishListReducer = (state = [], action) => {
    const existingWishlist = state.find((wishlistItem) => wishlistItem.productId === action.payload.productId);

    switch (action.type) {
        case WISHLIST_ADD_ITEM: {
            if (existingWishlist) {
                return state
                    .map((wishlistItem) => wishlistItem.productId === existingWishlist.productId ? { ...wishlistItem, quantity: wishlistItem.quantity + 1 } : wishlistItem)
                    .filter((wishlistItem) => wishlistItem.quantity < 2);
            }
            return [...state, { ...action.payload, quantity: 1 }];
        }

        case WISHLIST_REMOVE_ITEM: {
            return state.filter((wishlistItem) => wishlistItem.productId != action.payload.productId)
        }

        default:
            return state;
    }
}