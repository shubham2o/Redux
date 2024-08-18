import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/cartReducer";
import { addItemToWishList } from "../store/wishListReducer";

const Product = ({ productId, title, rating, price, image }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(({ cartItems }) => cartItems);
    // const wishlistItems = useSelector(({ wishList }) => wishList);
    // console.log(wishlistItems);
    const existingItem = cartItems.find((item) => item.productId === productId);

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

            <div className="cta-container mt-3 mb-1">
                {existingItem
                    ?
                    <div className="w-[46.5%] rounded-full bg-blue-600 text-center text-white font-bold flex items-center">
                        <button
                            className="pl-3 text-xl leading-none"
                            onClick={() => dispatch(removeItemFromCart(productId))}
                        >
                            -
                        </button>

                        <p className="w-16 h-9 tracking-wider leading-none flex justify-center items-center">{existingItem.quantity}</p>

                        <button
                            className="pr-3 text-xl leading-none"
                            onClick={() => dispatch(addItemToCart({ productId, title, rating, price, image }))}
                        >
                            +
                        </button>
                    </div>
                    :
                    <button
                        className="rounded-full text-white text-sm font-semibold bg-zinc-500 tracking-wide hover:bg-blue-600"
                        onClick={() => dispatch(addItemToCart({ productId, title, rating, price, image }))}
                    >
                        Add to Cart
                    </button>
                }

                <button
                    className="rounded-full text-white text-sm font-semibold bg-zinc-500 tracking-wide hover:bg-pink-600"
                    onClick={() => dispatch(addItemToWishList({ productId, title, rating, price, image }))}
                >
                    🤍 Wishlist
                </button>
            </div>
        </div>
    )
}

export default Product;