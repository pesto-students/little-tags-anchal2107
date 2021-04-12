import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useSelector((state) => state.productsReducer); //Takes function as argument
  console.log(products);
  const content = products.map(({id, title, image, price}) => (
    <ProductCard key={id} id={id} title={title} image={image} price={price}/>
  ));
  return <>
    <div>
        {content}
    </div>
  </>;
};

export default ProductList;
