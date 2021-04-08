import ProfileIcon from "../header/ProfileIcon";
import { GrClose } from "react-icons/gr";
import { toggleHamburgerMenu } from "../commonFunction.js";
import "./HamburgerMenu.scss";

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
          <a href="./">Accessories</a>
          <a href="./">Shirts</a>
          <a href="./">Pants</a>
          <a href="./">Jackets</a>
        </div>
        <div className="hamburger-links">
          <a href="./">Past Orders</a>
          <a href="./">Add Address</a>
        </div>
        <div className="log-out">
          <button>Log out</button>
        </div>
      </div>
    // </div>
  );
}

export default HamburgerMenu;
