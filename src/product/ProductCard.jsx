import PropTypes from "prop-types";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

function ProductCard({ id, title, image, price }) {
  return (
    <>
      <div id={id} className="product-card-container">
        <Link to={`/product/${id}`}>
          <div>
            <img src={image} alt="imge" height="400" width="300" />
          </div>
        </Link>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <h3>$ {price}</h3>
        </div>
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
