import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as ROUTES from "./../constant/Routes";
import withAuthorization from "./../session/withAuthorization";
import "./Profile.scss";

const Profile = () => {
  const authUser = useSelector((state) => state.sessionState);
  const userData = authUser.authUser || JSON.parse(localStorage.authUser);
  const { imagePath, username } = userData;

  return (
    <div className="app">
      <div className="view-profile-container">
        <h1>My Profile</h1>
        <img src={imagePath} alt="profile" />
        <h2>{username}</h2>
        <Link to={ROUTES.ORDER_HISTORY}>
          <button type="button" className="hero-button mt-1">
            MY ORDERS
          </button>
        </Link>
        <Link to={ROUTES.WISH_ITEM_LIST}>
          <button type="button" className="hero-button mt-1">
            MY WISHLIST
          </button>
        </Link>
      </div>
    </div>
  );
};

export default withAuthorization(Profile);
