import PropTypes from "prop-types";
import { TiShoppingCart } from "react-icons/ti";

function CartComponent({ handleAddToCart }) {
  return (
    <>
      <div className="cart-container mt-1" onClick={handleAddToCart}>
        <TiShoppingCart />
        <div>ADD TO CART</div>
      </div>
    </>
  );
}

export default CartComponent;

CartComponent.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

CartComponent.defaultProps = {
  handleAddToCart: () => {},
};
