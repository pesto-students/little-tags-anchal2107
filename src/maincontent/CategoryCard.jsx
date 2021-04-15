import React from "react";
import PropTypes from "prop-types";

const CategoryCard = ({ image, categoryName }) => {
  return (
    <div className="product-category-card">
      <img src={image} alt="product category" height="350" width="300" />
      <h3>{categoryName}</h3>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
};

CategoryCard.defaultProps = {
  image: "",
  categoryName: "",
};
