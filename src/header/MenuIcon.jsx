import React, { useContext } from "react";
import { resetAuthUser } from "../actions";
import * as actions from "./../constant/actionTypes";
import * as ROUTES from "./../constant/Routes";
import * as CATEGORY from "./../constant/categoryRoutes";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import FirebaseContext from "./../firebase/FirebaseContext";
import "./MenuIcon.scss";

const MenuIcon = () => {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const closeHambergerOnLinkSelect = () => {
    document.getElementById("navbarIcon").checked = false;
    handleChangeNavbarIcon();
  };
  const handleChangeNavbarIcon = () => {
    if (document.getElementById("navbarIcon").checked) {
      document.getElementById("mainContent").classList.add("disabled");
    } else {
      document.getElementById("mainContent").classList.remove("disabled");
    }
  };
  const handleSignOut = () => {
    closeHambergerOnLinkSelect();
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
        <NavLink to={CATEGORY.MENS} onClick={closeHambergerOnLinkSelect}>
          <li>{CATEGORY.mensClothing}</li>
        </NavLink>
        <NavLink to={CATEGORY.WOMENS} onClick={closeHambergerOnLinkSelect}>
          <li>{CATEGORY.womensClothing}</li>
        </NavLink>
        <NavLink to={CATEGORY.JEWEL} onClick={closeHambergerOnLinkSelect}>
          <li>{CATEGORY.jewels}</li>
        </NavLink>
        <NavLink to={CATEGORY.ELECTRONICS} onClick={closeHambergerOnLinkSelect}>
          <li>{CATEGORY.electronics}</li>
        </NavLink>
        <hr />
        <NavLink to={ROUTES.ORDER_HISTORY} onClick={closeHambergerOnLinkSelect}>
          <li>Past Orders</li>
        </NavLink>
        <NavLink to={ROUTES.ORDER_HISTORY} onClick={closeHambergerOnLinkSelect}>
          <li>Wishlist</li>
        </NavLink>
        <NavLink to={ROUTES.MY_PROFILE} onClick={closeHambergerOnLinkSelect}>
          <li>Profile</li>
        </NavLink>
        <div className="menu-log-out">
          <li className="hero-button log-out" onClick={handleSignOut}>
            Sign Out
          </li>
        </div>
      </ul>
    </div>
  );
};

export default MenuIcon;
