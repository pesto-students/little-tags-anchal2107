import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import * as actions from "../constant/actionTypes";

const ProductList = () => {
  const { search } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actions.FETCH_PRODUCT_BY_SEARCH_TEXT,
      payload: search ? search : "",
    });
    dispatch({
      type: actions.FETCH_PRODUCT_BY_CATEGORY,
      payload: search ? search : "",
    });
  }, [dispatch, search]);
  const { filteredProducts } = useSelector((state) => state.productsReducer);
  const content = filteredProducts.map(({ id, title, image, price }) => (
    <ProductCard key={id} id={id} title={title} image={image} price={price} />
  ));
  return <div className="product-list">{content}</div>;
};

export default ProductList;
