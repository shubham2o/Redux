import { useSelector } from 'react-redux';
import { loadingProductsSelector, errorProductsSelector, renderedProductsSelector } from '../store/slices/productsSlice';
import Product from '../components/Product';

const Home = () => {
    const isLoading = useSelector(loadingProductsSelector);
    const isError = useSelector(errorProductsSelector);
    const productsList = useSelector(renderedProductsSelector);

    return (
        isLoading
            ?
            <div>
                <h1>LOADING...</h1>
            </div>
            :
            (isError
                ?
                <div>
                    <h1>404 (Not Found)</h1>
                </div>
                :
                <div className="products-container">
                    {productsList.map(({ id, title, rating, price, image }, index) =>
                        <Product key={index} productId={id} title={title} rating={rating.rate} price={price} image={image} />
                    )}
                </div>
            )
    )
}

export default Home;