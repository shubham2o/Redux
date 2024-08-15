import { Link } from 'react-router-dom';
import { PiShoppingCart } from "react-icons/pi";

const Header = () => {
    return (
        <header>
            <div className="header-contents">
                <h1>
                    <Link to="/">Shopee</Link>
                </h1>

                <Link className="cart-icon" to="/cart">
                    <PiShoppingCart />
                    <div className="cart-items-count">0</div>
                </Link>
            </div>
        </header>
    )
}

export default Header;