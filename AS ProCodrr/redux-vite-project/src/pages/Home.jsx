import { useSelector } from "react-redux";
import Product from "../components/Product";

const Home = () => {
    const products = useSelector(({ products }) => products);

    return (
        <div className="products-container px-8">
            {products.map(({ id, title, rating, price, image }) =>
                <Product key={id} productId={id} title={title} rating={rating.rate} price={price} image={image} />
            )}
        </div>
    )
}

export default Home;