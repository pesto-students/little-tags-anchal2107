import { TiShoppingCart } from "react-icons/ti";

function CartIcon() {
  return (
    <>
      <div className="cart-icon">
        <TiShoppingCart />
        <span className="badge">2</span>
      </div>
    </>
  );
}

export default CartIcon;
