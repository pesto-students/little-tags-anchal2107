import React from "react";
import OrderCard from "./OrderCard";
import "./OrderHistory.scss";

const OrderHistory = () => {
  return (
    <div className="order-history-container">
      <h1>Your Orders</h1>
      <div className="flex flex-col">
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default OrderHistory;
