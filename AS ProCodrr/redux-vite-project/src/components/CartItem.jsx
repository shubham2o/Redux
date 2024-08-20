import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/cartReducer";
import { addItemToWishlist } from "../store/wishlistReducer";
import { GoHeartFill } from "react-icons/go";

const CartItem = ({ productId, title, rating, price, image, quantity = 1 }) => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector(({ wishlist }) => wishlist);
    const existingWishlist = wishlistItems.find((wishlist) => wishlist.productId === productId);
    const total = (price * quantity).toFixed(2);

    return (
        <div className="cart-item-container">
            <div className="cart-item px-2.5 bg-white">
                <img src={image} alt={title} />

                <div className="w-full">
                    <h3 className="text-[17px]">{title}</h3>
                    <p>{rating} ★ ★ ★ ★</p>
                </div>

                <button
                    className={`text-[21px] ${existingWishlist ? "text-pink-600" : "text-[#b8b8c1]"}`}
                    onClick={() => dispatch(addItemToWishlist({ productId, title, rating, price, image }))}
                >
                    <GoHeartFill />
                </button>
            </div>

            <div className="item-price bg-white">${price}</div>

            <div className="item-quantity text-center text-2xl text-white bg-white">
                <button
                    className="w-[3px] h-[3px] rounded-full p-3 bg-red-500 flex justify-center items-center"
                    onClick={() => dispatch(removeItemFromCart(productId))}
                >
                    -
                </button>

                <span className="w-6 text-black text-base">{quantity}</span>

                <button
                    className="w-[3px] h-[3px] rounded-full px-3 pt-3.5 pb-2.5 bg-green-500 flex justify-center items-center"
                    onClick={() => dispatch(addItemToCart({ productId, title, rating, price, image }))}
                >
                    +
                </button>
            </div>

            <div className="item-total bg-white pr-14">${total}</div>
        </div>
    )
}

export default CartItem;