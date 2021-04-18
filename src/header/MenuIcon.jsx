import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuIcon.scss";

const MenuIcon = () => {
  const handleChangeNavbarIcon = () => {
    if (document.getElementById("navbarIcon").checked) {
      document.getElementById("mainContent").classList.add("disabled");
    } else {
      document.getElementById("mainContent").classList.remove("disabled");
    }
  };
  return (
    <div className="menu-toggle">
      <input
        id="navbarIcon"
        type="checkbox"
        onChange={handleChangeNavbarIcon}
      />
      <span></span>
      <span></span>
      <span></span>
      <ul className="menu">
        <h1>Categories</h1>
        <NavLink to={"/products/mens-clothing"}>
          <li>Men's Clothing</li>
        </NavLink>
        <NavLink to={"/products/women-clothing"}>
          <li>Women's Clothing</li>
        </NavLink>
        <NavLink to={"/products/jewel"}>
          <li>Jewellery</li>
        </NavLink>
        <NavLink to={"/products/electronics"}>
          <li>Electronics</li>
        </NavLink>
        <hr />
        <NavLink to={"/order-history"}>
          <li>Past Orders</li>
        </NavLink>
        <NavLink to={"/"}>
          <div className="hero-button log-out">Log Out</div>
        </NavLink>
      </ul>
    </div>
  );
};

export default MenuIcon;
