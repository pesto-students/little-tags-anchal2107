import React from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES_Const from "../constant/Routes";


function Categories() {
  return (
    <div className="footer-category">
      <h2>Categories</h2>
      <div className="footer-category-links">
      <nav>
        <NavLink to={ROUTES_Const.LANDING}>Accessories 1(123)</NavLink>
        <NavLink to={ROUTES_Const.LANDING}>Accessories 1</NavLink>
        <NavLink to={ROUTES_Const.LANDING}>Accessories</NavLink>
      </nav>  
      </div>
    </div>
  );
}

export default Categories;
