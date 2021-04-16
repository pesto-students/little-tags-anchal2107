import React from "react";
import { Link } from "react-router-dom";
import "./OrderCard.scss";

const OrderCard = () => {
  return (
    <div className="flex order-card">
      <div>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="ordered product"
          height="150"
          width="150"
        />
      </div>
      <div className="flex flex-col flex-1 order-description">
        <h2 className="font-bold">Faut Leather Jacket</h2>
        <h3 className="font-bold">$ 1200</h3>
        <h3 className="font-normal">2 Sepetember 2020</h3>
      </div>
      <Link to="/product/1">
        <div className="mr-2">
          <button className="order-again" value="Order Again">
            Order Again
          </button>
        </div>
      </Link>
    </div>
  );
};

export default OrderCard;
