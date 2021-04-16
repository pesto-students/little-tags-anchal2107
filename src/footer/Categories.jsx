import React from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <div className="footer-category">
      <h2>Categories</h2>
      <div className="footer-category-links">
      <nav>
        <NavLink to={`/products/mens`}>Men's Clothing</NavLink>
        <NavLink to={`/products/womens`}>Women's Clothing</NavLink>
        <NavLink to={`/products/jewel`}>Jewellery</NavLink>
        <NavLink to={`/products/electronics`}>Electronics</NavLink>
      </nav>  
      </div>
    </div>
  );
}

export default Categories;
