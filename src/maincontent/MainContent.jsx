import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES_CONST from "../constant/Routes";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Error from "./Error";
import ConfirmationPage from "../buypage/ConfirmationPage";
import ShippingDetails from "../buypage/ShippingDetails";
import ProductList from "../product/ProductList";
import ViewCurrentProfile from "../profile/ViewCurrentProfile";
import EditCurrentProfile from "../profile/EditCurrentProfile";
import Product from "../product/Product";
import Cart from "../order/Cart";
import OrderHistory from "../order/OrderHistory";
import ThankYou from "../order/ThankYou";

function MainContent() {
  return (
    <div className="main-content">
      <Switch>
        <Route path={ROUTES_CONST.ERROR} component={Error}></Route>
        <Route path={ROUTES_CONST.HOME} component={Home}></Route>
        <Route path={ROUTES_CONST.CONTACT_US} component={ContactUs}></Route>
        <Route path={ROUTES_CONST.ABOUT} component={About}></Route>
        <Route
          path={ROUTES_CONST.ORDER_CONFIRMATION}
          component={ConfirmationPage}
        ></Route>
        <Route
          path={ROUTES_CONST.SHIP_DETAILS}
          component={ShippingDetails}
        ></Route>
        <Route
          path={ROUTES_CONST.PRODUCT_SEARCH}
          exact
          component={ProductList}
        ></Route>
        <Route
          path={ROUTES_CONST.VIEW_CURRENT_PROFILE}
          component={ViewCurrentProfile}
        ></Route>
        <Route
          path={ROUTES_CONST.EDIT_CURRENT_PROFILE}
          exact
          component={EditCurrentProfile}
        ></Route>
        <Route path={ROUTES_CONST.PRODUCT_LIST} component={ProductList}></Route>
        <Route
          path={ROUTES_CONST.PRODUCT_DETAIL}
          exact
          component={Product}
        ></Route>
        <Route path={ROUTES_CONST.CART} component={Cart}></Route>
        <Route
          path={ROUTES_CONST.ORDER_HISTORY}
          component={OrderHistory}
        ></Route>
        <Route path={ROUTES_CONST.THANK_YOU} component={ThankYou}></Route>
        <Route path={ROUTES_CONST.LANDING} component={Home}></Route>
      </Switch>
    </div>
  );
}

export default MainContent;
