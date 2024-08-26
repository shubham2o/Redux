import { useSelector } from "react-redux";
import { getAllWishlistItems } from "../store/slices/wishlistSlice";
import Product from "../components/Product";

const Wishlist = () => {
    const wishlistItems = useSelector(getAllWishlistItems);

    return (
        <div className="max-w-screen-xl h-full mx-auto p-8 font-semibold tracking-wide">
            <h1 className="mb-9 text-2xl underline underline-offset-8 text-white text-center">
                {wishlistItems.length === 0 ? "No Items Found" : "Items in your Wishlist"}
            </h1>

            <div className="products-container">
                {wishlistItems.map(({ id, title, rating, price, image }) =>
                    <Product key={id} id={id} title={title} rating={rating.rate} price={price} image={image} />
                )}
            </div>
        </div>
    )
}

export default Wishlist;