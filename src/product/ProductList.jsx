import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import * as actions from "../constant/actionTypes";
import Pagination from "./Pagination";
import * as CATEGORY from "./../constant/categoryRoutes";

const ProductList = () => {
  const { search } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState({
    start: 0,
    end: 8,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const searchTitle = useCallback(() => {
    switch (search) {
      case "mens-clothing":
        setCategoryName(CATEGORY.mensClothing);
        break;
      case "women-clothing":
        setCategoryName(CATEGORY.womensClothing);
        break;
      case "jewel":
        setCategoryName(CATEGORY.jewels);
        break;
      case "electronics":
        setCategoryName(CATEGORY.electronics);
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
  const content = filteredProducts
    .slice(pagination.start, pagination.end)
    .map(({ id, title, image, price }) => (
      <ProductCard key={id} id={id} title={title} image={image} price={price} />
    ));

  return (
    <div className="flex flex-col product-list-container">
      <h1>{categoryName}</h1>
      <hr />
      <div className="product-list">{content}</div>

      <Pagination
        showPerPage={8}
        onPaginationChange={onPaginationChange}
        total={filteredProducts.length}
      />
    </div>
  );
};

export default ProductList;
