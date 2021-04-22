import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RadioButton from "./RadioButton";

function PaymentCard() {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const { name, address, phoneNo, totalPrice } = useSelector(
    (state) => state.cartReducer
  );
  const radioChangeHandler = (event) => {
    setPaymentMethod(event.target.value);
  };
  const options = {
    key: "rzp_test_gbkbZiL7NeddJL",
    amount: totalPrice * 100,
    name: "Little Tags",
    description: "Your all shopping needs",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      //   const data = {
      //     orderCreationId: order_id,
      //     razorpayPaymentId: response.razorpay_payment_id,
      //     razorpayOrderId: response.razorpay_order_id,
      //     razorpaySignature: response.razorpay_signature,
      // };
      window.location.href = `/thank-you`;
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
      window.location.href = `/thank-you`;
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
