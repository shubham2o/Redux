import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadingState, displayState, errorState } from '../store/slices/productsSlice';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import CartIcon from '../assets/cart-icon.svg';

const Header = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadingState());

        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => dispatch(displayState(data)))
            .catch(() => dispatch(errorState()));
    }, []);

    const wishlist = useSelector(({ wishlist }) => wishlist);
    const cartItems = useSelector(({ cartItems }) => cartItems);

    return (
        <header>
            <div className="header-contents">
                <h1>
                    <Link to="/">shopKart</Link>
                </h1>

                <div className="cart-contents">
                    <Link className="cart-icon" to="/wishlist">
                        <FaHeart />

                        <div className="cart-items-count">{wishlist.length}</div>
                    </Link>

                    <Link className="cart-icon" to="/cart">
                        <img src={CartIcon} alt="cart-icon" />

                        <div className="cart-items-count">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;