import { Link } from 'react-router-dom';
import { PiShoppingCart } from "react-icons/pi";
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector(({ cartItems }) => cartItems);

    return (
        <header className='bg-zinc-900'>
            <div className="header-contents">
                <h1>
                    <Link to="/" className='text-3xl font-bold text-red-500 tracking-tighter'>ShopKaro.</Link>
                </h1>

                <Link className="cart-icon h-full mb-[1.05rem] flex flex-col items-center justify-end" to="/cart">
                    <div className="cart-items-count w-7 h-7 mb-[0.05rem] rounded-full pt-0.5 text-white border">
                        <div className="w-full h-full text-sm flex justify-center items-center">
                            {cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}
                        </div>
                    </div>

                    <PiShoppingCart className="w-8 text-2xl text-zinc-300" />
                </Link>
            </div>
        </header>
    )
}

export default Header;