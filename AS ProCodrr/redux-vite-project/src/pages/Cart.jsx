import { useSelector } from "react-redux";
import { getAllCartItems } from "../store/slices/cartSlice";
import CartItem from "../components/CartItem";

const Cart = () => {
    const cartItems = useSelector(getAllCartItems);

    return (
        <div className="cart-container h-full font-semibold tracking-wide">
            {cartItems.length === 0
                ?
                <h2 className="text-2xl underline underline-offset-8 text-white">No Items Found</h2>
                :
                <div>
                    <h2 className="text-2xl underline underline-offset-8 text-white">Items in your Cart</h2>

                    <div className="cart-items-container">
                        <div className="cart-header cart-item-container mb-1 text-xl text-white">
                            <div className="cart-item justify-center">Item</div>
                            <div className="item-price">Price</div>
                            <div className="quantity">Quantity</div>
                            <div className="total pr-[3.8rem]">Total</div>
                        </div>

                        {cartItems.map(({ id, title, rating, price, image, quantity }) =>
                            <CartItem key={id} id={id} title={title} rating={rating.rate} price={price} image={image} quantity={quantity} />
                        )}

                        <div className="cart-header cart-item-container">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="total w-full pr-[3.2rem] py-1.5 bg-green-700 text-white text-lg tracking-wider cursor-pointer">
                                $ {cartItems.reduce((accumulator, currentItem) => accumulator + (currentItem.quantity * currentItem.price), 0).toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart;