import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "./../constant/actionTypes";
import * as ROUTES from "./../constant/Routes";
import FirebaseContext from "./../firebase/FirebaseContext";
import RadioButton from "./RadioButton";

function PaymentCard() {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const { name, address, phoneNo, totalPrice, products } = useSelector(
    (state) => state.cartReducer
  );
  const authUser = useSelector((state) => state.sessionState);
  const radioChangeHandler = (event) => {
    setPaymentMethod(event.target.value);
  };

  const options = {
    key: "rzp_test_gbkbZiL7NeddJL",
    amount:parseInt( totalPrice * 100),
    name: "Little Tags",
    description: "Your all shopping needs",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function handler() {
      firebase.setOrderData(authUser.authUser.uid, products);
      dispatch({
        type: actions.RESET_CART,
        payload: null,
      });
      history.push(ROUTES.THANK_YOU);
    },
    prefill: {
      name,
      contact: phoneNo,
      email: "sample@gmail.com",
    },
    notes: {
      address,
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
  };

  const openPayModal = () => {
    if (paymentMethod === "COD") {
      firebase.setOrderData(authUser.authUser.uid, products);
      dispatch({
        type: actions.RESET_CART,
        payload: null,
      });
      history.push(ROUTES.THANK_YOU);
      return;
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="payment-card">
      <h1>Methods of Payment</h1>
      <RadioButton
        changed={radioChangeHandler}
        id="1"
        isSelected={paymentMethod === "RP"}
        label="RazorPay"
        value="RP"
      />
      <RadioButton
        changed={radioChangeHandler}
        id="2"
        isSelected={paymentMethod === "CP"}
        label="Visa/Mastercard/UPI"
        value="CP"
      />
      <RadioButton
        changed={radioChangeHandler}
        id="3"
        isSelected={paymentMethod === "PP"}
        label="PayPal"
        value="PP"
      />
      <RadioButton
        changed={radioChangeHandler}
        id="4"
        isSelected={paymentMethod === "COD"}
        label="Cash On Delivery"
        value="COD"
      />
      <div className="payment-button-div">
        <button
          value="Proceed to Payment"
          className="payment-button"
          onClick={openPayModal}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default PaymentCard;
