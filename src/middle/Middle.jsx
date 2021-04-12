import React from "react";
import { Switch, Route } from "react-router-dom";

import * as ROUTES_Const from "../constant/Routes";
import Home from "./Home";
import About from "./About";
import Contactus from "./Contactus";
import Error from "./Error";
import ConfirmationPage from "../buypage/ConfirmationPage";
import ShippingDetails from "../buypage/ShippingDetails";
import ProductList from "../product/ProductList";
import Product from "../product/Product";
export default function Middle() {
  return (
    <div className="Middle">
      <Switch>
        <Route path={ROUTES_Const.ERROR} component={Error}></Route>
        <Route path={ROUTES_Const.HOME} component={Home}></Route>
        <Route path={ROUTES_Const.CONTACTUS} component={Contactus}></Route>
        <Route path={ROUTES_Const.ABOUT} component={About}></Route>
        <Route path={ROUTES_Const.ORDER_CONFIRMATION} component={ConfirmationPage}></Route>
        <Route path={ROUTES_Const.SHIP_DETAILS} component={ShippingDetails}></Route>        
        <Route path={ROUTES_Const.PRODUCT_LIST} component={ProductList}></Route>        
        <Route path={ROUTES_Const.PRODUCT_DETAIL} exact component={Product}></Route>
        <Route path={ROUTES_Const.LANDING} component={Home}></Route>
      </Switch>
    </div>
  );
}
