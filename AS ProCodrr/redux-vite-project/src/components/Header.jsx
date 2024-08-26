import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadingState, productState, errorState } from "../store/slices/productSlice";
import { Link } from 'react-router-dom';
import { GrFavorite } from "react-icons/gr";
import { PiShoppingCart } from "react-icons/pi";

const Header = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'api/makeCall',
            payload: {
                url: 'products',
                onStart: loadingState.type,
                onSuccess: productState.type,
                onError: errorState.type,
            },
        })

        dispatch(() => {
            console.log('Hello!');
        })
    }, []);

    const cartItems = useSelector(({ cartItems }) => cartItems);
    const wishlistItems = useSelector(({ wishlist }) => wishlist);

    return (
        <header className='bg-zinc-900'>
            <div className="header-contents">
                <h1>
                    <Link to="/" className='text-3xl text-red-500 font-black tracking-tight italic'>$hoptify ™</Link>
                </h1>

                <div className="mt-8 text-white font-semibold flex gap-7">
                    <Link to="/wishlist" className="cart-icon h-full flex flex-col items-center justify-end">
                        <div className="cart-items-count w-7 h-7 mb-[0.10rem]">
                            <div className="w-full h-full rounded-full pt-0.5 flex justify-center items-center bg-pink-600">
                                {wishlistItems.length}
                            </div>
                        </div>

                        <GrFavorite className="w-8 text-2xl text-pink-600" />
                    </Link>

                    <Link to="/cart" className="cart-icon h-full flex flex-col items-center justify-end">
                        <div className="cart-items-count w-7 h-7 mb-[0.10rem]">
                            <div className="w-full h-full rounded-full pt-0.5 flex justify-center items-center bg-blue-600">
                                {cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}
                            </div>
                        </div>

                        <PiShoppingCart className="w-8 text-2xl text-blue-500" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;