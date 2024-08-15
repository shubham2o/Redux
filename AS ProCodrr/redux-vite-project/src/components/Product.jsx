const Product = ({ title, rating, price, image }) => {
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
                <button className="border border-black rounded-full">Add to Cart</button>

                <button className="border border-black rounded-full">Buy Now</button>
            </div>
        </div>
    )
}

export default Product;