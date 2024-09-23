import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, addToWishlist } from "../store/slices/wishlistSlice";
import { addToCart } from "../store/slices/cartSlice";

const Product = ({ productId, image, title, rating, price }) => {
    const wishlist = useSelector(({ wishlist }) => wishlist);
    const existingWishlistIndex = wishlist.findIndex((item) => item.productId === productId);
    const dispatch = useDispatch();

    return (
        <div className="product" >
            <div className="product-image">
                <img src={image} alt={title} />
            </div>

            <div className="title-container">
                <h3>
                    <a href="#">{title}</a>
                </h3>
            </div>

            <div className="price-rating-container">
                <p className="rating">{+rating} ★ ★ ★ ★</p>
                <p className="price">${price}</p>
            </div>

            <div className="cta-container">
                {existingWishlistIndex >= 0
                    ? <button onClick={() => dispatch(removeFromWishlist({ productId }))}>Remove from Wishlist</button>
                    : <button onClick={() => dispatch(addToWishlist({ productId }))}>Add to Wishlist</button>
                }

                <button onClick={() => dispatch(addToCart({ productId }))}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;