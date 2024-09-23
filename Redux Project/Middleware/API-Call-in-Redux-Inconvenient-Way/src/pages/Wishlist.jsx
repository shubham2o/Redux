import { useSelector } from 'react-redux';
import { wishlistSelector } from '../store/slices/wishlistSlice';
import Product from "../components/Product";

const Wishlist = () => {
    const wishlist = useSelector(wishlistSelector);

    return (
        <div className="products-container">
            {wishlist.map(({ id, title, rating, price, image }, index) =>
                <Product key={index} productId={id} title={title} rating={rating.rate} price={price} image={image} />
            )}
        </div>
    )
}

export default Wishlist;