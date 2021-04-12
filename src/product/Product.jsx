import Carousel from "./Carousel";
import CartComponent from "./CartComponent";
import QuantityComponent from "./QuantityComponent";
import SizeComponent from "./SizeComponent";
import "./Product.scss";

function Product() {
  return (
    <>
      <div className="product-container">
        <div className="product-carousel-container">
          <Carousel />
        </div>
        <div className="product-info-container">
          <h2>Fuax Leather Jacket</h2>
          <span>
            <h3>$ 1200</h3>
          </span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            aut maiores velit laborum error porro dolorum omnis! Dolores
            doloremque debitis pariatur facere reprehenderit ab quod doloribus
            odio voluptatum, temporibus et.
          </p>
          <SizeComponent />
          <QuantityComponent />
          <CartComponent />
        </div>
      </div>
    </>
  );
}

export default Product;
