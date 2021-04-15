import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import CartComponent from "./CartComponent";
import QuantityComponent from "./QuantityComponent";
import SizeComponent from "./SizeComponent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../constant/actionTypes";
import "./Product.scss";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("XS");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch({ type: actions.PRODUCT, id });
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch({
      type: actions.ADD_TO_CART,
      payload: { product, quantity, size },
    });
  };

  const handleQuantityCallback = (quantity) => {
    setQuantity(quantity);
  };

  const handleSizeCallback = (size) => {
    setSize(size);
  };
  return (
    <>
      <div className="product-container">
        <div className="product-carousel-container">
          <Carousel slides={product.image_carousel} />
        </div>
        <div className="product-info-container">
          <h2>{product.title}</h2>
          <span>
            <h3>$ {product.price}</h3>
          </span>
          <p>{product.description}</p>
          <SizeComponent handleSizeCallback={handleSizeCallback} />
          <QuantityComponent handleQuantityCallback={handleQuantityCallback} />
          <CartComponent handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </>
  );
}

export default Product;
