import { useSelector } from "react-redux";
import Product from "../components/Product";

const Wishlist = () => {
    const wishlistItems = useSelector(({ products, wishlist }) => {
        return wishlist.map(({ productId }) => {
            const wishlistProduct = products.list.find((product) => product.id === productId);
            return wishlistProduct;
        });
    });

    return (
        <div className="max-w-screen-xl h-full mx-auto p-8 font-semibold tracking-wide">
            <h1 className="mb-9 text-2xl underline underline-offset-8 text-white text-center">Items in your Wishlist</h1>

            <div className="products-container">
                {wishlistItems.map(({ id, title, rating, price, image }) =>
                    <Product key={id} productId={id} title={title} rating={rating.rate} price={price} image={image} />
                )}
            </div>
        </div>
    )
}

export default Wishlist;