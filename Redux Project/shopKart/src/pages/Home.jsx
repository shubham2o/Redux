import { useSelector } from '../myReactRedux.jsx';
import Product from '../components/Product';

const Home = () => {
    const productsList = useSelector(({ products }) => products);

    return (
        <div className="products-container">
            {productsList.map(({ id, title, rating, price, image }) => (
                <Product key={id} id={id} title={title} rating={rating.rate} price={price} image={image} />
            ))}
        </div>
    )
}

export default Home;