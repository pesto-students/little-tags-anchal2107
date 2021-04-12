import React, { useState } from "react";

function QuantityComponent() {
  const [quantity, setQuantity] = useState(1);

  const increseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="align-left">
        <h4>Quantity</h4>
        <div className="quantity-container">
          <div onClick={decreseQuantity}>-</div>
          <input
            type="text"
            id="myNumber"
            className="form-control"
            value={quantity}
            onChange={() => {}}
          />

          <div onClick={increseQuantity}>+</div>
        </div>
      </div>
    </>
  );
}

export default QuantityComponent;
