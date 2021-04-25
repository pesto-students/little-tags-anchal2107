import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import * as Routes from "../constant/Routes";
const WishItemIcon = ()=>{
  const { totalQuantity } = useSelector((state) => state.cartReducer);
  return (
    <div className="cart-icon-container">
      <Link to={Routes.WISH_ITEM_LIST}>
        <div className="cart-icon">
          <AiFillHeart />
          <span className="badge">{totalQuantity}</span>
        </div>
      </Link>
    </div>
  );
}

export default WishItemIcon;