import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/cartReducer";
import { addItemToWishlist } from "../store/wishListReducer";

const Product = ({ productId, title, rating, price, image }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(({ cartItems }) => cartItems);
    const existingCartItem = cartItems.find((cartItem) => cartItem.productId === productId);
    const wishlistItems = useSelector(({ wishlist }) => wishlist);
    const existingWishlist = wishlistItems.find((wishlist) => wishlist.productId === productId);

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
                <button
                    className={`rounded-full ${existingWishlist ? "bg-pink-600" : "bg-zinc-500"}`}
                    onClick={() => dispatch(addItemToWishlist({ productId, title, rating, price, image }))}
                >
                    🤍 Wishlist
                </button>

                {existingCartItem
                    ?
                    <div className="w-[46.5%] rounded-full bg-blue-600 text-center text-xl font-bold leading-none flex items-center">
                        <button className="pl-3" onClick={() => dispatch(removeItemFromCart(productId))}>-</button>

                        <p className="w-16 h-9 text-base flex justify-center items-center">{existingCartItem.quantity}</p>

                        <button className="pr-3" onClick={() => dispatch(addItemToCart({ productId, title, rating, price, image }))}>+</button>
                    </div>
                    :
                    <button className="rounded-full bg-zinc-500" onClick={() => dispatch(addItemToCart({ productId, title, rating, price, image }))}>
                        Add to Cart
                    </button>
                }
            </div>
        </div>
    )
}

export default Product;