// Action Types
const WISHLIST_ADD_ITEM = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

// Action Creators
export const addItemToWishList = (productData) => {
    return {
        type: WISHLIST_ADD_ITEM,
        payload: productData,
    }
}

export const removeItemFromWishList = (productId) => {
    return {
        type: WISHLIST_REMOVE_ITEM,
        payload: { productId }
    }
}

// Reducer
export const wishListReducer = (state = [], action) => {
    const existingItem = state.find((wishlistItem) => wishlistItem.productId === action.payload.productId);

    switch (action.type) {
        case WISHLIST_ADD_ITEM: {
            if (existingItem) {
                return state.map((wishlistItem) => wishlistItem.productId === existingItem.productId ? { ...wishlistItem, quantity: wishlistItem.quantity + 1 } : wishlistItem)
            }
            return [...state, { ...action.payload, quantity: 1 }];
        }

        case WISHLIST_REMOVE_ITEM: {
            return state.filter((wishListItem) => wishListItem.productId != action.payload.productId)
        }

        default:
            return state;
    }
}