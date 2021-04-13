import { FaBars } from "react-icons/fa";
import { toggleHamburgerMenu } from "../commonFunction.js";
import React, { useState } from "react"

import { Routelink } from "./Routelink";
import * as ROUTES_Const from "../constant/Routes";

import "./MenuIcon.scss"


function MenuIcon() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <>
     <nav className="navBar">
   <button onClick={handleToggle}>{navbarOpen ? "X" : <FaBars />}</button>

   <div id="OpenMenu" className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <div id="links">
            <h3>Categories</h3>
            <nav>
              <Routelink
                routeurl={ROUTES_Const.ABOUT}
                linkname="About"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_Const.CONTACTUS}
                linkname="Contact Us"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_Const.HOME}
                linkname="Home"
              ></Routelink>
            </nav>
          </div>
          <div id="links">
            <h3>Categories</h3>
            <nav>
              <Routelink
                routeurl={ROUTES_Const.ABOUT}
                linkname="About"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_Const.CONTACTUS}
                linkname="Contact Us"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_Const.HOME}
                linkname="Home"
              ></Routelink>
            </nav>
          </div>
          <div id="links">
            <h3>Categories</h3>
            <nav>
              <Routelink
                routeurl={ROUTES_Const.ABOUT}
                linkname="About"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_Const.CONTACTUS}
                linkname="Contact Us"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_Const.HOME}
                linkname="Home"
              ></Routelink>
            </nav>
          </div>
        </div>
     
      <div className="menu-icon" onClick={() =>toggleHamburgerMenu(false)}>
    
      </div></nav>
    </>
  );
}

export default MenuIcon;
