import React, { useEffect } from "react";
import Carousel from "./Carousel";
import CartComponent from "./CartComponent";
import QuantityComponent from "./QuantityComponent";
import SizeComponent from "./SizeComponent";
import "./Product.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../constant/actionTypes";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    product: { title, description, quantity, price }
  } = useSelector((state) => state.productsReducer);
  // const product = useSelector((state) => {
  //   console.log(state.productsReducer);
  //   return state.productsReducer
  // });
  // console.log(product);
  useEffect(() => {
    dispatch({ type: actions.PRODUCT, id });
  }, [id]);
  return (
    <>
      <div className="product-container">
        <div className="product-carousel-container">
          <Carousel />
        </div>
        <div className="product-info-container">
          <h2>{title}</h2>
          <span>
            <h3>$ {price}</h3>
          </span>
          <p>{description}</p>
          <SizeComponent />
          <QuantityComponent/>
          <CartComponent />
        </div>
      </div>
    </>
  );
}

export default Product;
