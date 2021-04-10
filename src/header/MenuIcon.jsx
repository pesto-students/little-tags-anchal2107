import { FaBars } from "react-icons/fa";
import { toggleHamburgerMenu } from "../commonFunction.js";
import  HamburgerMenu from '../hamburgermenu/HamburgerMenu'
function MenuIcon() {
  return (
    <>
     <FaBars />
      <div className="menu-icon" onClick={() =>toggleHamburgerMenu(false)}>
       <HamburgerMenu></HamburgerMenu>
      </div>
    </>
  );
}

export default MenuIcon;
