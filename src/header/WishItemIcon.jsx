import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import * as Routes from "../constant/Routes";

const WishItemIcon = () => {
  const { productsCount } = useSelector((state) => state.wishReducer);
  return (
    <div className="cart-icon-container wish-icon">
      <Link to={Routes.WISH_ITEM_LIST}>
        <div className="cart-icon">
          <AiFillHeart />
          <span className="badge">{productsCount}</span>
        </div>
      </Link>
    </div>
  );
};

export default WishItemIcon;
