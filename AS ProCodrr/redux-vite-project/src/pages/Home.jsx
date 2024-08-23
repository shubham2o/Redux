import { useSelector } from "react-redux";
import Product from "../components/Product";

const Home = () => {
    const products = useSelector(({ products }) => products.list);
    const isLoading = useSelector(({ products }) => products.loading);
    const isError = useSelector(({ products }) => products.error);

    return (
        <div>
            {isLoading
                ?
                <div className="max-w-screen-xl h-screen mx-auto pb-32 flex justify-center items-center">
                    <h1 className="text-5xl text-white font-black italic">LOADING...</h1>
                </div>
                :
                (isError
                    ?
                    <div className="max-w-screen-xl h-screen mx-auto pb-32 flex justify-center items-center">
                        <h1 className="text-5xl text-white font-black italic">404 (Not Found)</h1>
                    </div>
                    :
                    <div className="products-container px-8">
                        {products.map(({ id, title, rating, price, image }) =>
                            <Product key={id} productId={id} title={title} rating={rating.rate} price={price} image={image} />
                        )}
                    </div>
                )
            }
        </div>
    )
}

export default Home;