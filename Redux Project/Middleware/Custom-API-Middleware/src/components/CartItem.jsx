import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity, removeFromCart } from '../store/slices/cartSlice';
import { MdDelete } from "react-icons/md";

const CartItem = ({ productId, title, rating, price, image, quantity }) => {
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
                <button onClick={() => dispatch(decreaseItemQuantity({ productId }))}>-</button>

                <span>{quantity}</span>

                <button onClick={() => dispatch(increaseItemQuantity({ productId }))}>+</button>

                <MdDelete className="delete-btn" onClick={() => dispatch(removeFromCart({ productId }))} />
            </div>

            <div className="item-total">${quantity * price}</div>
        </div>
    )
}

export default CartItem;