import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions";
import FirebaseContext from "../firebase/FirebaseContext";
import * as localStorages from "../constant/localStorage";
const withAuthentication = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);    
    const saveToLocalStorage = (authUser) => {
      localStorage.setItem("authUser", JSON.stringify(authUser));
    };
    const next = (authUser) => {
      saveToLocalStorage(authUser);
      props.setAuthUser(authUser);
      setWishListData(authUser);
    };

    const setWishListData = (authUser) => {
      if (authUser != null) {
        const uid = authUser.uid;
        const wishProducts = authUser.WishList;

        let products = [];
        let productsCount = 0;

        for (let i in wishProducts) {
          products.push(wishProducts[i]);
        }
        productsCount = products.length;
        console.log(
          `${uid} in getitemwishlid out ${JSON.stringify(
            products
          )} productcount::: ${productsCount}}`
        );

        let localData = {
          products: products,
          productsCount: productsCount,
          uid: uid,
        }
        localStorage.setItem(localStorages.WISHLIST, JSON.stringify(localData));           
      }
    };

    const fallback = () => {
      localStorage.removeItem("authUser");
      props.setAuthUser(null);
    };
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("authUser"));
      props.setAuthUser(user);
      setWishListData(user);
      firebase.onAuthChangeListener(next, fallback);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} />;
  };

  return connect(null, { setAuthUser })(NewComponent);
};

export default withAuthentication;
