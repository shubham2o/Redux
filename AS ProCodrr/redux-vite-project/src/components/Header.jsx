import { Link } from 'react-router-dom';
import { PiShoppingCart } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector(({ cartItems }) => cartItems);
    const wishlistItems = useSelector(({ wishList }) => wishList);
    console.log(wishlistItems);

    return (
        <header className='bg-zinc-900'>
            <div className="header-contents">
                <h1>
                    <Link to="/" className='text-3xl text-red-500 font-black tracking-tight italic'>$hoptify ™</Link>
                </h1>

                <div className="mt-8 flex gap-7">
                    <Link className="cart-icon h-full text-white font-semibold flex flex-col items-center justify-end" to="/wishlist">
                        <div className="cart-items-count w-7 h-7 mb-[0.10rem]">
                            <div className="w-full h-full rounded-full pt-0.5 flex justify-center items-center bg-pink-600">
                                {/* {wishlistItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0)} */}
                            </div>
                        </div>

                        <GrFavorite className="w-8 text-2xl text-pink-600" />
                    </Link>

                    <Link className="cart-icon h-full text-white font-semibold flex flex-col items-center justify-end" to="/cart">
                        <div className="cart-items-count w-7 h-7 mb-[0.10rem]">
                            <div className="w-full h-full rounded-full pt-0.5 flex justify-center items-center bg-blue-600">
                                {cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}
                            </div>
                        </div>

                        <PiShoppingCart className="w-8 text-2xl text-blue-600" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;