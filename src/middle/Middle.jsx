import React from "react";
import { Switch, Route } from "react-router-dom";

import * as ROUTES_Const from "../constant/Routes";
import Home from "./Home";
import About from "./About";
import Contactus from "./Contactus";
import Error from "./Error";
export default function Middle() {
  return (
    <div className="Middle">
      <Switch>
        <Route path={ROUTES_Const.ERROR} component={Error}></Route>
        <Route path={ROUTES_Const.HOME} component={Home}></Route>
        <Route path={ROUTES_Const.CONTACTUS} component={Contactus}></Route>
        <Route path={ROUTES_Const.ABOUT} component={About}></Route>
        <Route path={ROUTES_Const.LANDING} component={Home}></Route>
      </Switch>
    </div>
  );
}
