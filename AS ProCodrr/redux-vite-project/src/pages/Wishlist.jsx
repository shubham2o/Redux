import { useSelector } from "react-redux";
import Product from "../components/Product";

const Wishlist = () => {
    const wishlistItems = useSelector(({ wishList }) => wishList);

    return (
        <div className="max-w-screen-xl h-full mx-auto p-8 font-semibold tracking-wide">
            <h1 className="mb-9 text-2xl underline underline-offset-8 text-white text-center">Items in your Wishlist</h1>

            <div className="products-container">
                {wishlistItems.map(({ productId, title, rating, price, image }) =>
                    <Product key={productId} productId={productId} title={title} rating={rating} price={price} image={image} />
                )}
            </div>
        </div>
    )
}

export default Wishlist;