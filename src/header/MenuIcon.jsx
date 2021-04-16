import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import React, { useState } from "react";
import { Routelink } from "./Routelink";
import * as ROUTES_CONST from "../constant/Routes";
import "./MenuIcon.scss";

function MenuIcon(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
     props.onHambergerOpen(!navbarOpen);
  };

  return (
    <>
      <nav className="navBar">
        <button onClick={handleToggle}>{navbarOpen ? <GrClose /> : <FaBars />}</button>

        <div
          id="OpenMenu"
          className={`menuNav ${navbarOpen ? " showMenu" : ""}`}
        >
          <div id="links">
            <h3>Categories</h3>
            <nav>
              <Routelink
                routeurl={ROUTES_CONST.ABOUT}
                linkname="About"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_CONST.PRODUCT_LIST}
                linkname="Products"
              ></Routelink>
                <Routelink
                routeurl={ROUTES_CONST.VIEW_CURRENT_PROFILE}
                linkname="Your Profile"
              ></Routelink>
                 <Routelink
                routeurl={ROUTES_CONST.EDIT_CURRENT_PROFILE}
                linkname="Eidt Profile"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_CONST.HOME}
                linkname="Home"
              ></Routelink>
            </nav>
          </div>
          <div id="links">
            <h3>Categories</h3>
            <nav>
              <Routelink
                routeurl={ROUTES_CONST.ABOUT}
                linkname="About"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_CONST.CONTACT_US}
                linkname="Contact Us"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_CONST.HOME}
                linkname="Home"
              ></Routelink>
            </nav>
          </div>
          <div id="links">
            <h3>Categories</h3>
            <nav>
              <Routelink
                routeurl={ROUTES_CONST.ABOUT}
                linkname="About"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_CONST.CONTACT_US}
                linkname="Contact Us"
              ></Routelink>
              <Routelink
                routeurl={ROUTES_CONST.HOME}
                linkname="Home"
              ></Routelink>
            </nav>
          </div>
        </div>

        <div
          className="menu-icon"
          onClick={() => {}}
        ></div>
      </nav>
    </>
  );
}

export default MenuIcon;
