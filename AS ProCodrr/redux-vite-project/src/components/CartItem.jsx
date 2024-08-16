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

            <div className="item-quantity">
                <button className="text-xl text-red-500 font-black" onClick={() => dispatch(removeItemFromCart(productId))}>-</button>

                <span>{quantity}</span>

                <button className="text-xl text-green-500 font-black" onClick={() => dispatch(addItemToCart({ productId, title, rating, price, image }))}>+</button>
            </div>

            <div className="item-total">${total}</div>
        </div>
    )
}

export default CartItem;