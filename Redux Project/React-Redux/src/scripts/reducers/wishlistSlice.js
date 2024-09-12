// Action Types
export const ADD_TO_WISHLIST = "wishlist/AddItem";
export const REMOVE_FROM_WISHLIST = "wishlist/RemoveItem";

export const wishlistSlice = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [...state, action.payload]
        case REMOVE_FROM_WISHLIST:
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return state;
    }
}