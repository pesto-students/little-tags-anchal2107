import PropTypes from "prop-types";

function CartComponent({ handleAddToCart }) {
  return (
    <div className="mt-1">
      <div className="cart-container" onClick={handleAddToCart}>
        <div>ADD TO CART</div>
      </div>
    </div>
  );
}

export default CartComponent;

CartComponent.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

CartComponent.defaultProps = {
  handleAddToCart: () => {},
};
