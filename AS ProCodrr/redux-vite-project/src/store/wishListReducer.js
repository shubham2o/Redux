// Action Types
const WISHLIST_ADD_ITEM = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

// Action Creators
export const addItemToWishList = (productId, quantity = 1) => {
    return {
        type: WISHLIST_ADD_ITEM,
        payload: { productId, quantity }
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
    switch (action.type) {
        case WISHLIST_ADD_ITEM:
            return [...state, action.payload];

        case WISHLIST_REMOVE_ITEM:
            return state.filter((wishListItem) => wishListItem.productId != action.payload.productId)

        default:
            return state;
    }
}