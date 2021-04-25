import PropTypes from "prop-types";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import  WishItem  from "./WishItem";
function ProductCard({ id, title, image, price }) {
  return (
    <>
      <div id={id} className="product-card-container">
        <div>
          <WishItem isSmallComponent={true} isAdded={false} productId={id} />
        </div>
        <Link to={`/product/${id}`}>
          <div>
            <img src={image} alt="product" height="330" />
          </div>
          <div>
            <h3 className="overflow" title={title}>
              {title}
            </h3>
          </div>
          <div>
            <h3 className="font-normal">$ {price}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

ProductCard.defaultProps = {
  title: "",
  image: "",
  price: "",
};
