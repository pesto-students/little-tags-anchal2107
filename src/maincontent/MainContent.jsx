import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "../constant/Routes";
import Home from "./Home";
import ConfirmationPage from "../buypage/ConfirmationPage";
import ShippingDetails from "../buypage/ShippingDetails";
import ProductList from "../product/ProductList";
import Product from "../product/Product";
import Cart from "../order/Cart";
import OrderHistory from "../order/OrderHistory";
import ThankYou from "../order/ThankYou";
import SignUpModal from "../header/authentication/SignUpModal";
import WishItemList from "../product/WishItemList";
import Profile from "../profile/Profile";

function MainContent() {
  return (
    <div id="mainContent" className="main-content">
      <Switch>
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ORDER_CONFIRMATION} component={ConfirmationPage} />
        <Route path={ROUTES.SHIP_DETAILS} component={ShippingDetails} />
        <Route path={ROUTES.PRODUCT_SEARCH} component={ProductList} />
        <Route path={ROUTES.WISH_ITEM_LIST} component={WishItemList} />
        <Route path={ROUTES.PRODUCT_CATAGORY_SEARCH} component={ProductList} />
        <Route path={ROUTES.MY_PROFILE} component={Profile} />
        <Route path={ROUTES.PRODUCT_LIST} component={ProductList} />
        <Route path={ROUTES.PRODUCT_DETAIL} exact component={Product} />
        <Route path={ROUTES.CART} component={Cart} />
        <Route path={ROUTES.SIGN_IN} component={SignUpModal} />
        <Route path={ROUTES.ORDER_HISTORY} component={OrderHistory} />
        <Route path={ROUTES.THANK_YOU} component={ThankYou} />
        <Route path={ROUTES.LANDING} component={Home} />
      </Switch>
    </div>
  );
}

export default MainContent;
