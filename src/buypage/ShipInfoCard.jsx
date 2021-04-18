import React from "react";
import { useSelector } from "react-redux";

function ShipInfoCard() {
  const { name, address, phoneNo } = useSelector((state) => state.cartReducer);
  return (
    <div className="ship-info-card">
      <h3>{name}</h3>
      <p>{address}</p>
      <p>{phoneNo}</p>
    </div>
  );
}

export default ShipInfoCard;
