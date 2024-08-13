import { useEffect } from "react";
import { asyncGetProducts } from "../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
    const { products } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetProducts());
    }, []);

    return (
        <div className="w-full h-full rounded-3xl p-7 font-medium bg-black">
            <ul className="w-full flex flex-col gap-9">
                {products
                    &&
                    products.map((product, index) => {
                        return (
                            <li key={product.id} className="w-full text-lg flex justify-between items-center hover:text-blue-500">
                                <h1>{product.title}</h1>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default Products;