import { useSelector } from '../myReactRedux.jsx';
import CartItem from '../components/CartItem';

const Cart = () => {
    const cartItems = useSelector(({ cartItems }) => cartItems);

    return (
        <div className="cart-container" >
            <h2>Items in Your Cart</h2>

            <div className="cart-items-container">
                <div className="cart-header cart-item-container">
                    <div className="cart-item">Item</div>
                    <div className="item-price">Price</div>
                    <div className="quantity">Quantity</div>
                    <div className="total">Total</div>
                </div>

                {cartItems.map(({ id, title, rating, price, image, quantity }) => (
                    <CartItem key={id} id={id} title={title} price={price} quantity={quantity} image={image} rating={rating} />
                ))}

                <div className="cart-header cart-item-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="total">
                        ${cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;