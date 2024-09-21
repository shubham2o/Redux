import { useSelector } from 'react-redux';
import Product from "../components/Product";

const Wishlist = () => {
    const wishlist = useSelector(({ wishlist }) => wishlist);

    return (
        <div className="products-container">
            {wishlist.map(({ productId, title, rating, price, image }, index) =>
                <Product key={index} productId={productId} title={title} rating={rating} price={price} image={image} />
            )}
        </div>
    )
};

export default Wishlist;