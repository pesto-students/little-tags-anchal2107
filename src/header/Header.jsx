import React, { useState, useEffect, useContext } from "react";
import MenuIcon from "./MenuIcon";
import CartIcon from "./CartIcon";
import ProfileIcon from "./ProfileIcon";
import SearchFilter from "./SearchFilter";
import { NavLink } from "react-router-dom";
import WishItemIcon from "./WishItemIcon";
import FirebaseContext from "./../firebase/FirebaseContext";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../constant/actionTypes";
import logo from "./../assets/logoo.JPG";
import "./Header.scss";
import SignUpModal from "./authentication/SignUpModal";

function Header() {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  const [WishCount, setWishCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const showLoginModal = () => setShowLogin(!showLogin);

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
      {showLogin ? <SignUpModal handleCloseModal={showLoginModal}/> : null}
      <MenuIcon />
      <div className="logo">
        <NavLink to={"/"}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <SearchFilter />
      <ProfileIcon showLoginModal={showLoginModal}/>
      <WishItemIcon />
      <CartIcon />
    </div>
  );
}

export default Header;
