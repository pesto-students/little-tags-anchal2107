import React, { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import FirebaseContext from "./../firebase/FirebaseContext";
import { GrClose } from "react-icons/gr";
import PropTypes from "prop-types";
import "./ShippingDetails.scss";

const Address = ({ handleCloseAddressModal, addressId }) => {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [city, setCity] = useState("");
  const [apt, setApt] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  let isDefault = false;

  const validateAddress = () => {
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
    if (document.getElementById("shipDefaultAddress").checked) {
      isDefault = true;
    }
    const fullAddress = {
      name,
      phoneNo,
      address,
      apt,
      city,
      zipCode,
      state,
      isDefaultAddress: isDefault,
    };
    return fullAddress;
  };

  const handleAddAddressClick = () => {
    const fullAddress = validateAddress();
    firebase.setDefaultAddress(authUser.authUser.uid, fullAddress);
    handleCloseAddressModal();
  };

  const handleUpdateAddressClick = () => {
    const fullAddress = validateAddress();
    firebase.updateAddressDetail(authUser.authUser.uid, addressId, fullAddress);
    handleCloseAddressModal();
  };

  useEffect(() => {
    if (addressId !== "") {
      firebase
        .getAddressDetail(JSON.parse(localStorage.getItem("authUser")).uid, addressId)
        .then((snapshot) => {
          const {
            name,
            address,
            phoneNo,
            city,
            apt,
            zipCode,
            state,
          } = snapshot.val();
          setName(name);
          setAddress(address);
          setPhoneNo(phoneNo);
          setCity(city);
          setApt(apt);
          setZipCode(zipCode);
          setState(state);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overlay">
      <form action="" method="post">
        <div className="shipping-details-container center">
          <div className="flex">
            <h1 className="flex-1">Shipping Details</h1>
            <div
              className="pointer font-size-13"
              onClick={handleCloseAddressModal}
            >
              <GrClose />
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="shipPersonName">
              NAME<label className="red">*</label>
            </label>
            <input
              type="text"
              id="shipPersonName"
              placeholder="Name"
              value={name}
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
              value={phoneNo}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <br />
            <label htmlFor="apartment">APT / SUITE / OTHER</label>
            <input
              type="text"
              id="apartment"
              placeholder="Other"
              value={apt}
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
                  value={zipCode}
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
                  value={city}
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
              value={state}
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
          {addressId ? (
            <div className="payment-button-div">
              <button
                value="Update Address"
                type="submit"
                className="payment-button"
                onClick={handleUpdateAddressClick}
              >
                UPDATE ADDRESS
              </button>
            </div>
          ) : (
            <div className="payment-button-div">
              <button
                value="Add Address"
                type="submit"
                className="payment-button"
                onClick={handleAddAddressClick}
              >
                ADD ADDRESS
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Address;

Address.propTypes = {
  handleCloseAddressModal: PropTypes.func,
  addressId: PropTypes.string,
};

Address.defaultProps = {
  handleCloseAddressModal: () => {},
  addressId: "",
};
