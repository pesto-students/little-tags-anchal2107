import PropTypes from "prop-types";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

function ProductCard({ id, title, image, price }) {
  return (
    <>
      <div id={id} className="product-card-container">
        <Link to={`/product/${id}`}>
          <div>
            <img src={image} alt="product" height="300" width="250" />
          </div>
          <div>
            <h4 className="overflow" title={title}>
              {title}
            </h4>
          </div>
          <div>
            <h4 className="font-normal">$ {price}</h4>
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
