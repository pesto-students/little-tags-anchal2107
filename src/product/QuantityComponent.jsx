import React from "react";
import PropTypes from "prop-types";

function QuantityComponent({ handleQuantityCallback }) {

  const increseQuantity = () => {
    handleQuantityCallback((quantity) => {
      document.getElementById("quantityInput").innerHTML = quantity + 1;
      return quantity + 1;
    });
  };
  const decreseQuantity = () => {
    handleQuantityCallback((quantity) => {
      if (quantity > 1) {
        document.getElementById("quantityInput").innerHTML = quantity - 1;
        return quantity - 1;
      }
      return quantity;
    });
  };
  return (
    <>
      <div className="align-left">
        <h4>Quantity</h4>
        <div className="quantity-container">
          <div onClick={decreseQuantity}>-</div>
          <div id="quantityInput">1</div>
          <div onClick={increseQuantity}>+</div>
        </div>
      </div>
    </>
  );
}

export default QuantityComponent;

QuantityComponent.propTypes = {
  handleQuantityCallback: PropTypes.func.isRequired,
};

QuantityComponent.defaultProps = {
  handleQuantityCallback: () => {},
};
