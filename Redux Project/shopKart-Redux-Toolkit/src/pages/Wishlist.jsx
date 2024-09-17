import { useSelector } from "../myReactRedux.jsx";
import Product from "../components/Product";

const Wishlist = () => {
    const wishlist = useSelector(({ wishlist }) => wishlist);

    return (
        <div className="products-container">
            {wishlist.map(({ id, title, rating, price, image }) => (
                <Product key={id} id={id} title={title} rating={rating} price={price} image={image} />
            ))}
        </div>
    )
};

export default Wishlist;