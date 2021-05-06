import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FirebaseContext from "./../firebase/FirebaseContext";
import * as actions from "../constant/actionTypes";
import "./ShippingDetails.scss";

function ShippingDetails() {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [city, setCity] = useState("");
  const [apt, setApt] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    firebase.getDefaultAddress(authUser.authUser.uid).then((snapshot) => {
      const dbUser = snapshot.val();
      setAddress(dbUser);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConfirmOrderClick = () => {
    if (
      name === "" ||
      address === "" ||
      phoneNo === "" ||
      city === "" ||
      zipCode === "" ||
      state === ""
    ) {
      return;
    }
  
    const fullAddress = `${address} ${apt} ${city} ${state}-${zipCode}`;
    if (document.getElementById("shipDefaultAddress").checked) {
      firebase.setDefaultAddress(authUser.authUser.uid, fullAddress);
    }
    dispatch({
      type: actions.ADD_SHIP_DETAILS,
      payload: { name, phoneNo, address: fullAddress },
    });
    history.push("/confirm-order");
  };

  return (
    <div className="app">
      <form action="" method="post">
        <div className="shipping-details-container">
          <h1>Shipping Details</h1>
          <div className="form-input">
            <label htmlFor="shipPersonName">
              NAME<label className="red">*</label>
            </label>
            <input
              type="text"
              id="shipPersonName"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="shipPhoneNo">
              PHONE NO.<label className="red">*</label>
            </label>
            <input
              type="text"
              id="shipPhoneNo"
              placeholder="Phone No."
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="shipAddress">
              STREET ADDRESS<label className="red">*</label>
            </label>
            <input
              type="text"
              id="shipAddress"
              placeholder="Street Address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <br />
            <label htmlFor="apartment">APT / SUITE / OTHER</label>
            <input
              type="text"
              id="apartment"
              placeholder="Other"
              onChange={(e) => setApt(e.target.value)}
              required
            />
            <br />
            <div className="flex">
              <div className="flex flex-col w-49">
                <label htmlFor="zipCode">
                  ZIPCODE<label className="red">*</label>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="ZipCode"
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-49 ml-2">
                <label htmlFor="city">
                  CITY<label className="red">*</label>
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>
            <br />
            <label htmlFor="state">
              STATE<label className="red">*</label>
            </label>
            <select
              name="state"
              id="state"
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="">Choose State Name</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">KeralaKerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="">None</option>
            </select>
            <span>
              <input type="checkbox" id="shipDefaultAddress" defaultChecked />
              <label htmlFor="shipDefaultAddress">Set as default address</label>
            </span>
          </div>

          <div className="payment-button-div">
            <button
              value="Confirm Order"
              type="submit"
              className="payment-button"
              onClick={handleConfirmOrderClick}
            >
              CONFIRM ORDER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ShippingDetails;
