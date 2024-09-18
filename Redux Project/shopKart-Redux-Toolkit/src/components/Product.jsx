import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../store/slices/cartSlice";
import { removeFromWishlist, addToWishlist } from "../store/slices/wishlistSlice";

const Product = ({ id, image, title, rating, price }) => {
    const dispatch = useDispatch();
    const wishlist = useSelector(({ wishlist }) => wishlist)
    const existingWishlistIndex = wishlist.findIndex((item) => item.id === id);

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
                    ? <button onClick={() => dispatch(removeFromWishlist(id))}>Remove from Wishlist</button>
                    : <button onClick={() => dispatch(addToWishlist({ id, image, title, rating, price }))}>Add to Wishlist</button>
                }

                <button onClick={() => dispatch(addToCart({ id, image, title, rating, price }))}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;