import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/cartReducer";

const CartItem = ({ productId, title, rating, price, image, quantity = 1 }) => {
    const dispatch = useDispatch();
    const total = (price * quantity).toFixed(2);

    return (
        <div className="cart-item-container">
            <div className="cart-item">
                <img src={image} alt={title} />

                <div>
                    <h3>{title}</h3>
                    <p>{rating} ★ ★ ★ ★</p>
                </div>
            </div>

            <div className="item-price">${price}</div>

            <div className="item-quantity text-center">
                <button
                    className="w-[1px] h-[1px] rounded-full p-3 text-2xl text-white bg-red-500 font-semibold flex justify-center items-center"
                    onClick={() => dispatch(removeItemFromCart(productId))}
                >
                    -
                </button>

                <span className="w-6">{quantity}</span>

                <button
                    className="w-[1px] h-[1px] rounded-full px-3 pt-3 pb-2.5 text-2xl text-white bg-green-500 font-semibold flex justify-center items-center"
                    onClick={() => dispatch(addItemToCart({ productId, title, rating, price, image }))}
                >
                    +
                </button>
            </div>

            <div className="item-total">${total}</div>
        </div>
    )
}

export default CartItem;