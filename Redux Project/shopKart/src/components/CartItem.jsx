import { useDispatch } from "../myReactRedux.jsx";
import { decreaseItemQuantity, increaseItemQuantity } from "../store/reducers/cartSlice";

const CartItem = ({ id, title, rating, price, image, quantity }) => {
    const dispatch = useDispatch();

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
                <button onClick={() => dispatch(decreaseItemQuantity(id))}>-</button>

                <span>{quantity}</span>

                <button onClick={() => dispatch(increaseItemQuantity(id))}>+</button>
            </div>

            <div className="item-total">${quantity * price}</div>
        </div>
    )
}

export default CartItem;