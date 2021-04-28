import React from "react";
import { Link } from "react-router-dom";
import products from "./../data/products.json";

const BestSeller = () => {
  const content = products.slice(1, 4).map(({ id, title, image }) => {
    return (
      <span key={id}>
        <div className="best-seller-card">
          <div className="best-seller-image mt-1">
            <img src={image} alt="product" />
          </div>
          <div className="best-seller-title mt-1">
            <h2>{title}</h2>
          </div>
          <Link to={`/product/${id}`}>
            <button type="button" className="hero-button mt-1">
              SHOP NOW
            </button>
          </Link>
        </div>
      </span>
    );
  });

  return (
    <div className="best-seller-main-container app">
      <div className="best-seller-child-container flex flex-col m-1">
        <h1>BEST SELLERS</h1>
        <div className="best-seller-card-container">{content}</div>
      </div>
    </div>
  );
};

export default BestSeller;
