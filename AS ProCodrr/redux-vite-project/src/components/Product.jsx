import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../store/slices/wishlistSlice";
import { decreaseItemQuantity, increaseItemQuantity, addItem } from "../store/slices/cartSlice";

const Product = ({ id, title, rating, price, image }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(({ cartItems }) => cartItems);
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === id);
    const wishlistItems = useSelector(({ wishlist }) => wishlist);
    const existingWishlist = wishlistItems.find((wishlist) => wishlist.id === id);

    return (
        <div className="product">
            <div className="product-image mt-1 mb-3.5">
                <img src={image} alt={title} />
            </div>

            <div className="title-container h-11 text-center tracking-wide">
                <h3>
                    <span>{title}</span>
                </h3>
            </div>

            <div className="price-rating-container mt-3">
                <p className="rating">{rating} ★ ★ ★ ★</p>
                <p className="price">${price}</p>
            </div>

            <div className="cta-container mt-3 mb-1 text-white text-sm font-semibold tracking-wide">
                <button className={`rounded-full ${existingWishlist ? "bg-pink-600" : "bg-zinc-500"}`} onClick={() => dispatch(toggleWishlist({ id }))}>
                    🤍 Wishlist
                </button>

                {existingCartItem
                    ?
                    <div className="w-[46.5%] rounded-full bg-blue-600 text-center text-xl font-bold leading-none flex items-center">
                        <button className="pl-3" onClick={() => dispatch(decreaseItemQuantity({ id }))}>-</button>

                        <p className="w-16 h-9 text-base flex justify-center items-center">{existingCartItem.quantity}</p>

                        <button className="pr-3" onClick={() => dispatch(increaseItemQuantity({ id }))}>+</button>
                    </div>
                    :
                    <button className="rounded-full bg-zinc-500" onClick={() => dispatch(addItem({ id }))}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default Product;