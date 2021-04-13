import React from "react";

import { Routelink } from "./Routelink";
import * as ROUTES_Const from "../../constant/Routes";




const HamburgerMenu = ({ open }) => {
  return (
    
    
      <div id="topHambugerDiv">
        <div id="OpenMenu">
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
      </div>
 
  );
};
export { HamburgerMenu };
