import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/cartReducer";

const CartItem = ({ productId, title, rating, price, image, quantity = 1 }) => {
    const dispatch = useDispatch();
    const total = (price * quantity).toFixed(2);

    return (
        <div className="cart-item-container">
            <div className="cart-item bg-white">
                <img src={image} alt={title} />

                <div>
                    <h3>{title}</h3>
                    <p>{rating} ★ ★ ★ ★</p>
                </div>
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