import "./app.css";
import { useSelector } from "react-redux";
import Product from "./components/Product";

const App = () => {
  const products = useSelector(({ products }) => products);

  return (
    <div className="products-container">
      {products.map(({ id, image, title, rating, price }) => <Product key={id} image={image} title={title} rating={rating.rate} price={price} />)}
    </div>
  )
}

export default App;