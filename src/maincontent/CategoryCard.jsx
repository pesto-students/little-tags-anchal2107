import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({ image, categoryName, category }) => {
  return (
    <div className="product-category-card">
      <Link to={`/products/${category}`}>
        <img src={image} alt="product category" height="350" />
        <h3>{categoryName}</h3>
      </Link>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

CategoryCard.defaultProps = {
  image: "",
  categoryName: "",
  category: "",
};
