import { useSelector } from 'react-redux';
import Product from "../components/Product";

const Wishlist = () => {
    const wishlist = useSelector(({ products, wishlist }) => {
        return wishlist.map(({ productId }) => {
            const wishlistProduct = products.list.find((item) => item.id === productId);
            return wishlistProduct;
        })
    });

    return (
        <div className="products-container">
            {wishlist.map(({ id, title, rating, price, image }, index) =>
                <Product key={index} productId={id} title={title} rating={rating.rate} price={price} image={image} />
            )}
        </div>
    )
}

export default Wishlist;