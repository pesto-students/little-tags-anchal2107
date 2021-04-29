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
      <div className="align-left mt-1">
        <h4>QUANTITY</h4>
        <div className="quantity flex pt-0">
          <button
            className="minus-btn"
            type="button"
            name="button"
            onClick={decreseQuantity}
          >
            -
          </button>
          <div className="product-quantity" id="quantityInput">
            1
          </div>
          <button
            className="plus-btn"
            type="button"
            name="button"
            onClick={increseQuantity}
          >
            +
          </button>
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
