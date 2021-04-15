import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useSelector((state) => state.productsReducer);
  const content = products.map(({id, title, image, price}) => (
    <ProductCard key={id} id={id} title={title} image={image} price={price} />
  ));
  return <>
    <div className="product-list">
        {content}
    </div>
  </>;
};

export default ProductList;
