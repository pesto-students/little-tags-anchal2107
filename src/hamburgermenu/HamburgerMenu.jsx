import ProfileIcon from "../header/ProfileIcon";
import { GrClose } from "react-icons/gr";
import { toggleHamburgerMenu } from "../commonFunction.js";
import "./HamburgerMenu.scss";
import { NavLink } from "react-router-dom";
import * as ROUTES_Const from "../constant/Routes";

function HamburgerMenu() {
  return (
    // <div  className="humburger-parent-div">
    <div id="hamburgerMenu" className="hamburger-container z-1">
      <div className="profile-icon-container">
        <ProfileIcon className="flex-1" />
        <GrClose onClick={() => toggleHamburgerMenu(true)} />
      </div>
      <div className="hamburger-categories">
        <h2>Categories</h2>
        <nav>
          <NavLink to={ROUTES_Const.LANDING}>Accessories</NavLink>
          <NavLink to={ROUTES_Const.LANDING}>Shirts</NavLink>
          <NavLink to={ROUTES_Const.LANDING}>Pants</NavLink>
          <NavLink to={ROUTES_Const.LANDING}>Jackets</NavLink>
        </nav>
      </div>
      <div className="hamburger-links">
      <nav>
          <NavLink to={ROUTES_Const.LANDING}>Past Order</NavLink>
          <NavLink to={ROUTES_Const.LANDING}>Add Address</NavLink>
     </nav>

      </div>
      <div className="log-out">
        <button>Log out</button>
      </div>
    </div>
    // </div>
  );
}

export default HamburgerMenu;
