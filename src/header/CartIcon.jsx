import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as ROUTES from "../constant/Routes";
import { TiShoppingCart } from "react-icons/ti";

function CartIcon() {
  const { totalQuantity } = useSelector((state) => state.cartReducer);
  return (
    <div className="cart-icon-container">
      <Link to={ROUTES.CART}>
        <div className="cart-icon">
          <TiShoppingCart />
          <span className="badge">{totalQuantity}</span>
        </div>
      </Link>
    </div>
  );
}

export default CartIcon;
