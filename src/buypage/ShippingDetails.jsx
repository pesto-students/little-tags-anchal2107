import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../constant/actionTypes";
import "./ShippingDetails.scss";

function ShippingDetails() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const dispatch = useDispatch();

  const handleConfirmOrderClick = () => {
    dispatch({
      type: actions.ADD_SHIP_DETAILS,
      payload: { name, address, phoneNo },
    });
  }

  return (
    <div className="app">
      <form action="" onSubmit={()=>{}}>
      <div className="shipping-details-container">
        <h1>Shipping Details</h1>
        <div className="form-input">
          <label htmlFor="shipPersonName">Name</label>
          <input
            type="text"
            id="shipPersonName"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="shipPhoneNo">Phone No.</label>
          <input
            type="text"
            id="shipPhoneNo"
            placeholder="Enter Phone No."
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="shipAddress">Address</label>
          <textarea
            type="text"
            id="shipAddress"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <span>
            <input type="checkbox" id="shipDefaultAddress" checked />
            <label htmlFor="shipDefaultAddress">Set as default address</label>
          </span>
        </div>
        <Link to="/confirm-order">
          <div className="payment-button-div">
            <button value="Confirm Order" type="submit" className="payment-button" onClick={handleConfirmOrderClick}>
              Confirm Order
            </button>
          </div>
        </Link>
      </div>
      </form>
    </div>
  );
}

export default ShippingDetails;
