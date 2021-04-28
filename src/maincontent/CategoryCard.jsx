import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({ image, categoryName, category, widthClass }) => {
  return (
    <div className={`product-category ${widthClass}`}>
      <img className="category-img" src={image} alt="product category" />
      <Link to={`/products/${category}`}>
        <div className="text-block">
          <h4>{categoryName}</h4>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  widthClass: PropTypes.string,
};

CategoryCard.defaultProps = {
  image: "",
  categoryName: "",
  category: "",
  widthClass: "",
};
