import React, { useState} from "react";
import MenuIcon from "./MenuIcon";
import CartIcon from "./CartIcon";
import ProfileIcon from "./ProfileIcon";
import SearchFilter from "./SearchFilter";
import { NavLink } from "react-router-dom";
import WishItemIcon from "./WishItemIcon";

import logo from "./../assets/logoo.JPG";
import "./Header.scss";
import SignUpModal from "./authentication/SignUpModal";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const showLoginModal = () => setShowLogin(!showLogin);

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
