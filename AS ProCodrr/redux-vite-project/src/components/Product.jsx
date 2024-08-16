import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartReducer";

const Product = ({ productId, title, rating, price, image }) => {
    const dispatch = useDispatch();

    return (
        <div className="product">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>

            <div className="title-container pt-2">
                <h3>
                    <a href="#">{title}</a>
                </h3>
            </div>

            <div className="price-rating-container mt-2">
                <p className="rating">{rating} ★ ★ ★ ★</p>

                <p className="price">${price}</p>
            </div>

            <div className="cta-container mt-2">
                <button
                    className="border border-black rounded-full bg-stone-200"
                    onClick={() => dispatch(addItemToCart({ productId, title, rating, price, image }))}
                >
                    Add to Cart
                </button>

                <button
                    className="border border-black rounded-full bg-stone-200"
                // onClick={}
                >
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default Product;