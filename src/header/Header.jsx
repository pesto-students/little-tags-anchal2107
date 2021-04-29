import MenuIcon from "./MenuIcon";
import CartIcon from "./CartIcon";
import ProfileIcon from "./ProfileIcon";
import SearchFilter from "./SearchFilter";
import { NavLink } from "react-router-dom";
import WishItemIcon from "./WishItemIcon";
import "./Header.scss";
import FirebaseContext from "./../firebase/FirebaseContext";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../constant/actionTypes";

function Header() {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  const [WishCount, setWishCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    getItemInWishList();
    dispatch({
      type: actions.UPDATE_WISH_LIST_COUNT,
      productsCount: WishCount,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getItemInWishList = () => {
    if (authUser != null && authUser.authUser != null) {
      firebase.getWishListData(authUser.authUser.uid).then((snapshot) => {
        const wishProducts = snapshot.val();
        if (wishProducts != null) {
          console.log(` kesys count ${Object.keys(wishProducts).length}`);
          setWishCount(Object.keys(wishProducts).length);
          return WishCount;
        }
      });
    }
    setWishCount(0);
    return WishCount;
  };

  return (
    <div className="header">
      <MenuIcon />
      <div className="logo">
        <NavLink to={"/"}>
          <h1>Taggstar</h1>
        </NavLink>
      </div>
      <SearchFilter />
      <ProfileIcon />
      <WishItemIcon />
      <CartIcon />
    </div>
  );
}

export default Header;
