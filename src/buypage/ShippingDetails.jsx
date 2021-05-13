import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import FirebaseContext from "./../firebase/FirebaseContext";
import Address from "./Address";
import * as routes from "./../constant/Routes";
import * as actions from "../constant/actionTypes";
import "./ShippingDetails.scss";

function ShippingDetails() {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [addressData, setAddressData] = useState([]);
  const [addressId, setAddressId] = useState("");

  const handleCloseAddressModal = () => {
    setAddressId("");
    setOpenAddressModal(false);
  };

  const handleProceedCheckout = () => {
    let id;
    const elements = document.getElementsByName("address");
    for (let i = 0, l = elements.length; i < l; i++) {
      if (elements[i].checked) {
        id = elements[i].parentElement.id;
        break;
      }
    }
    const name = document.getElementById(`name${id}`).textContent;
    const phoneNo = document.getElementById(`phoneNo${id}`).textContent;
    const address = document.getElementById(`address${id}`).textContent;
    dispatch({
      type: actions.ADD_SHIP_DETAILS,
      payload: { name, phoneNo, address },
    });
    history.push(routes.ORDER_CONFIRMATION);
  };

  const removeAddress = (e) => {
    const addressId = e.target.parentElement.parentElement.id;
    firebase.deleteAddress(
      JSON.parse(localStorage.getItem("authUser")).uid,
      addressId
    );
    if (addressData != null && addressData.length > 0) {
      const newAddressData = addressData.filter((item) => {
        return item.i !== addressId;
      });
      setAddressData(newAddressData);
    } else {
      setAddressData([]);
    }
  };

  const editAddress = (e) => {
    const addressId = e.target.parentElement.parentElement.id;
    setAddressId(addressId);
    setOpenAddressModal(true);
  };

  useEffect(() => {
    //setAddressData([]);
    firebase
      .getAddressList(JSON.parse(localStorage.getItem("authUser")).uid)
      .then((snapshot) => {
        const dbUser = snapshot.val();
        for (let i in dbUser) {
          const {
            address,
            apt,
            city,
            isDefaultAddress,
            name,
            phoneNo,
            state,
            zipCode,
          } = dbUser[i];
          setAddressData((arr) => [
            ...arr,
            {
              address,
              apt,
              city,
              isDefaultAddress,
              name,
              phoneNo,
              state,
              zipCode,
              i,
            },
          ]);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!openAddressModal && !!localStorage.lastAddressId) {
      let id = localStorage.lastAddressId;
      firebase
        .getAddressDetail(JSON.parse(localStorage.getItem("authUser")).uid, id)
        .then((snapshot) => {
          const result = snapshot.val();
          const {
            address,
            apt,
            city,
            isDefaultAddress,
            name,
            phoneNo,
            state,
            zipCode,
          } = result;
          setAddressData((arr) => [
            ...arr,
            {
              i: id,
              address,
              apt,
              city,
              isDefaultAddress,
              name,
              phoneNo,
              state,
              zipCode,
            },
          ]);
        });
    }
    localStorage.removeItem("lastAddressId");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAddressModal]);

  const content = addressData.map(
    ({
      address,
      apt,
      city,
      isDefaultAddress,
      name,
      phoneNo,
      state,
      zipCode,
      i,
    }) => (
      <div key={i} id={i} className="flex order-card">
        <input
          type="radio"
          name="address"
          className="radio-check"
          defaultChecked={isDefaultAddress}
        />
        <div className="flex flex-col flex-1 m-1 font-size-13">
          <h3 id={`name${i}`}>{name}</h3>
          <p className="mt-1" id={`address${i}`}>
            {address} {apt} {city} {state} {zipCode}
          </p>
          <div className="flex align-item-baseline mt-1">
            <h3>Mobile No. :</h3>&nbsp;<p id={`phoneNo${i}`}>{phoneNo}</p>
          </div>
        </div>
        <div className="flex flex-col app">
          <div className="mt-1 hero-button" onClick={removeAddress}>
            REMOVE
          </div>
          <div className="mt-1 hero-button" onClick={editAddress}>
            EDIT
          </div>
        </div>
      </div>
    )
  );

  return (
    <div>
      {openAddressModal ? (
        <Address
          handleCloseAddressModal={handleCloseAddressModal}
          addressId={addressId}
        />
      ) : null}
      <div className="flex">
        <h1 className="flex-1 m-1 align-item-center">
          Select Delivery Address
        </h1>
        <div
          className="hero-button m-1 mt-1"
          onClick={() => setOpenAddressModal(true)}
        >
          ADD NEW ADDRESS
        </div>
        <div
          className="hero-button m-1 mt-1"
          onClick={() => handleProceedCheckout()}
        >
          PROCEED TO CHECKOUT
        </div>
      </div>
      <hr></hr>
      <div>{content}</div>
    </div>
  );
}

export default ShippingDetails;
