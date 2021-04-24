import React, { useContext } from "react";
import { resetAuthUser } from "../actions";
import * as actions from "./../constant/actionTypes";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import FirebaseContext from "./../firebase/FirebaseContext";
import "./MenuIcon.scss";

const MenuIcon = () => {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const closeHambergerOnLinkSelect = () =>{
 //   const currentCheckedStatus = document.getElementById("navbarIcon").checked
    document.getElementById("navbarIcon").checked = false;
    handleChangeNavbarIcon();
  }
  const handleChangeNavbarIcon = () => {
    if (document.getElementById("navbarIcon").checked) {
      document.getElementById("mainContent").classList.add("disabled");
    } else {
      document.getElementById("mainContent").classList.remove("disabled");
    }
  };
  const handleSignOut = () => {
    firebase.doSignOut();
    dispatch(resetAuthUser());
    dispatch({
      type: actions.RESET_CART,
      payload: null,
    });
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
        <NavLink to={"/products/mens-clothing"} onClick={closeHambergerOnLinkSelect}>
          <li>Men's Clothing</li>
        </NavLink>
        <NavLink to={"/products/women-clothing"} onClick={closeHambergerOnLinkSelect}>
          <li>Women's Clothing</li>
        </NavLink>
        <NavLink to={"/products/jewel"} onClick={closeHambergerOnLinkSelect}>
          <li>Jewellery</li>
        </NavLink>
        <NavLink to={"/products/electronics"} onClick={closeHambergerOnLinkSelect}>
          <li>Electronics</li>
        </NavLink>
        <hr />
        <NavLink to={"/order-history"} onClick={closeHambergerOnLinkSelect}>
          <li>Past Orders</li>
        </NavLink>
        <li className="hero-button log-out" onClick={handleSignOut} >Log Out</li>
      </ul>
    </div>
  );
};

export default MenuIcon;
