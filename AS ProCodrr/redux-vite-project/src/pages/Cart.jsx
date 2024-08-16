import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
    const cartItems = useSelector(({ cartItems }) => cartItems);

    return (
        <div className="cart-container">
            <h2>Items in Your Cart</h2>

            <div className="cart-items-container">
                <div className="cart-header cart-item-container">
                    <div className="cart-item">Item</div>
                    <div className="item-price">Price</div>
                    <div className="quantity">Quantity</div>
                    <div className="total">Total</div>
                </div>

                {cartItems.map(({ productId, title, rating, price, image, quantity }) =>
                    <CartItem key={productId} productId={productId} title={title} rating={rating} price={price} image={image} quantity={quantity} />
                )}

                <div className="cart-header cart-item-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="total">
                        $ {cartItems.reduce((accumulator, currentItem) => accumulator + (currentItem.quantity * currentItem.price), 0).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;