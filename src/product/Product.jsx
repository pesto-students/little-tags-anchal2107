import React, { useState, useEffect, useContext } from "react";
import Carousel from "./Carousel";
import CartComponent from "./CartComponent";
import QuantityComponent from "./QuantityComponent";
import SizeComponent from "./SizeComponent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../constant/actionTypes";
import { GiReturnArrow } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import "./Product.scss";
import WishItem from "./WishItem";
import FirebaseContext from "./../firebase/FirebaseContext";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("XS");
  const [isWishAdded, setIsWishAdded] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productsReducer);
  const { title, price, description, image_carousel: imageCarousel } = product;
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);

  useEffect(() => {
    dispatch({ type: actions.PRODUCT, id });
    isItemInWishList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch({
      type: actions.ADD_TO_CART,
      payload: { product, quantity, size },
    });
  };

  const WishListOperations = (doAddToWishList) => {
    if (authUser != null && authUser.authUser != null) {
      if (doAddToWishList) {
        return () => {
          firebase.updateWishItem(authUser.authUser.uid, product);
          setIsWishAdded(true);
          dispatch({
            type: actions.ADD_TO_WISH_LIST,
            payload: { product, size },
          });
        };
      } else {
        return () => {
          firebase.deleteWishItem(authUser.authUser.uid, id);
          setIsWishAdded(false);
          dispatch({
            type: actions.REMOVE_FROM_WISH_LIST,
            payload: id,
          });
        };
      }
    }
  };

  const isItemInWishList = () => {
    if (authUser != null && authUser.authUser != null) {
      firebase.getWishListData(authUser.authUser.uid).then((snapshot) => {
        const wishProducts = snapshot.val();
        for (let i in wishProducts) {
          if (i === id) {
            setIsWishAdded(true);
            return true;
          }
        }
      });
    }
    setIsWishAdded(false);
    return false;
  };

  const handleQuantityCallback = (quantities) => {
    setQuantity(quantities);
  };

  const handleSizeCallback = (selectedSize) => {
    setSize(selectedSize);
  };
  return (
    <div className="flex flex-col">
      <div className="product-container">
        <div className="product-carousel-container">
          <Carousel slides={imageCarousel} />
        </div>
        <div className="product-info-container">
          <h2>{title}</h2>
          <span>
            <h3>$ {price}</h3>
          </span>
          <p>{description}</p>
          <SizeComponent handleSizeCallback={handleSizeCallback} />
          <QuantityComponent handleQuantityCallback={handleQuantityCallback} />
          <div className="flex">
            <CartComponent handleAddToCart={handleAddToCart} />
            <WishItem
              isSmallComponent={false}
              isAdded={isWishAdded}
              handleAddToWishList={WishListOperations(true)}
              handleRemoveToWishList={WishListOperations(false)}
            />
          </div>
        </div>
      </div>
      <div className="mislan-container">
        <div className="mislan-item">
          <SiTrustpilot />
          <h1>100% Original Products</h1>
        </div>
        <div className="mislan-item">
          <GiReturnArrow />
          <h1>15 Days Easy Return</h1>
        </div>
        <div className="mislan-item">
          <FaShippingFast />
          <h1>Free Shipping</h1>
        </div>
      </div>
    </div>
  );
}

export default Product;
