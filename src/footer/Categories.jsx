import React from "react";
import { NavLink } from "react-router-dom";
import * as CATEGORY from "./../constant/categoryRoutes";

function Categories() {
  return (
    <div className="footer-category">
      <h2>Categories</h2>
      <div className="footer-category-links">
        <nav>
          <NavLink to={CATEGORY.MENS}>Men's Clothing</NavLink>
          <NavLink to={CATEGORY.WOMENS}>Women's Clothing</NavLink>
          <NavLink to={CATEGORY.JEWEL}>Jewellery</NavLink>
          <NavLink to={CATEGORY.ELECTRONICS}>Electronics</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Categories;
