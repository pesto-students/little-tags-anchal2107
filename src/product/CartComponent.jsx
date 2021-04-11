import { TiShoppingCart } from "react-icons/ti";

function CartComponent() {
  return (
    <>
      <div className="cart-container">
        <TiShoppingCart />
        <div>ADD TO CART</div>
      </div>
    </>
  );
}

export default CartComponent;
