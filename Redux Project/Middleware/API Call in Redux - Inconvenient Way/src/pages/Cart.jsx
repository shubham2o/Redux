import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
    const isLoading = useSelector(({ cartItems }) => cartItems.loading);
    const isError = useSelector(({ cartItems }) => cartItems.error);
    const cartItems = useSelector(({ products, cartItems }) => {
        return cartItems.list
            .map(({ productId, quantity }) => {
                const cartProduct = products.list.find((product) => product.id === productId);
                return { ...cartProduct, quantity };
            })
            .filter(({ title }) => title)
    });

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

                {isLoading
                    ?
                    <div>
                        <h1>LOADING...</h1>
                    </div>
                    :
                    (isError
                        ?
                        <div>
                            <h1>404 (Not Found)</h1>
                        </div>
                        :
                        cartItems.map(({ id, title, price, image, quantity, rating }, index) => (
                            <CartItem key={index} productId={id} title={title} price={price} quantity={quantity} image={image} rating={rating.rate} />
                        ))
                    )
                }

                <div className="cart-header cart-item-container">
                    <div></div>
                    <div></div>
                    <div></div>

                    {!isLoading && !isError
                        &&
                        <div className="total">
                            ${cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart;