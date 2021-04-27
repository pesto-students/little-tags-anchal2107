import "./WishItem.scss";
import PropTypes from "prop-types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const WishItem = ({
  isSmallComponent,
  isAdded,
  handleAddToWishList,
  handleRemoveToWishList,
}) => {
  if (isSmallComponent) {
    return (
      <div>
        {isAdded ? (
          <div onClick={handleRemoveToWishList}>
            <FcLike />
          </div>
        ) : (
          <div onClick={handleAddToWishList}>
            <FcLikePlaceholder />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="wishList-Big-container mt-1">
        {isAdded ? (
          <div onClick={handleRemoveToWishList}>
            <AiFillHeart /> Remove From WishList
          </div>
        ) : (
          <div onClick={handleAddToWishList}>
            <AiOutlineHeart />
            Add To WishList
          </div>
        )}
      </div>
    );
  }
};
//export default WishItem;
export default WishItem;

WishItem.propTypes = {
  handleAddToWishList: PropTypes.func,
  handleRemoveToWishList: PropTypes.func,
  isSmallComponent: PropTypes.bool.isRequired,
};

WishItem.defaultProps = {
  handleAddToWishList: () => {},
  handleRemoveToWishList: () => {},
  isAdded: false,
  isSmallComponent: true,
};
