import { FaBars } from "react-icons/fa";
import { toggleHamburgerMenu } from "../commonFunction.js";

function MenuIcon() {
  return (
    <>
      <div className="menu-icon" onClick={() =>toggleHamburgerMenu(false)}>
        <FaBars />
      </div>
    </>
  );
}

export default MenuIcon;
