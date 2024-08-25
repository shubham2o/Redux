import { useSelector } from "react-redux";
import { getProductLoadingState, getProductErrorState, getAllProducts } from "../store/slices/productSlice";
import Product from "../components/Product";

const Home = () => {
    const isLoading = useSelector(getProductLoadingState);
    const isError = useSelector(getProductErrorState);
    const products = useSelector(getAllProducts);

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
                            <Product key={id} id={id} title={title} rating={rating.rate} price={price} image={image} />
                        )}
                    </div>
                )
            }
        </div>
    )
}

export default Home;