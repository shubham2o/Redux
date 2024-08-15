import { useSelector } from "react-redux";
import Product from "../components/Product";

const Home = () => {
    const products = useSelector(({ products }) => products);

    return (
        <div className="products-container">
            {products.map(({ id, title, rating, price, image }) =>
                <Product key={id} title={title} rating={rating.rate} price={price} image={image} />
            )}
        </div>
    )
}

export default Home;