import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import * as actions from "../constant/actionTypes";

const ProductList = () => {
  const { search } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const searchTitle = useCallback(() => {
    switch (search) {
      case "mens-clothing":
        setCategoryName("Men's Clothing");
        break;
      case "women-clothing":
        setCategoryName("Women's Clothing");
        break;
      case "jewel":
        setCategoryName("Jewellery");
        break;
      case "electronics":
        setCategoryName("Electronics");
        break;
      case "":
      case undefined:
        setCategoryName("All Products");
        break;
      default:
        setCategoryName(`Showing Products for: ${search}`);
    }
  }, [search]);

  useEffect(() => {
    dispatch({
      type: actions.FETCH_PRODUCT_BY_SEARCH_TEXT,
      payload: search ? search : "",
    });
    dispatch({
      type: actions.FETCH_PRODUCT_BY_CATEGORY,
      payload: search ? search : "",
    });
    searchTitle();
  }, [dispatch, search, searchTitle]);
  const { filteredProducts } = useSelector((state) => state.productsReducer);
  const content = filteredProducts.map(({ id, title, image, price }) => (
    <ProductCard key={id} id={id} title={title} image={image} price={price} />
  ));

  return (
    <div className="flex flex-col product-list-container">
      <h1>{categoryName}</h1>
      <hr />
      <div className="product-list">{content}</div>
    </div>
  );
};

export default ProductList;
