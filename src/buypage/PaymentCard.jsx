import { useState } from "react";
import RadioButton from "./RadioButton";

function PaymentCard() {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const radioChangeHandler = (event) => {
    setPaymentMethod(event.target.value);
  };
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
        <button value="Proceed to Payment" className="payment-button">Proceed to Payment</button>
      </div>
    </div>
  );
}

export default PaymentCard;
