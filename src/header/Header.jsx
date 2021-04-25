import MenuIcon from "./MenuIcon";
import CartIcon from "./CartIcon";
import ProfileIcon from "./ProfileIcon";
import SearchFilter from "./SearchFilter";
import { NavLink } from "react-router-dom";
import WishItemIcon from "./WishItemIcon";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <MenuIcon />
      <div className="logo">
        <NavLink to={"/"}>
          <h1>Little Tags</h1>
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
