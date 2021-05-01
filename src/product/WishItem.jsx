import "./WishItem.scss";
import PropTypes from "prop-types";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
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
            <FcLikePlaceholder className="grey-fill" />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="m-1">
        <div className="wishlist-button-container">
          {isAdded ? (
            <div onClick={handleRemoveToWishList}>
              {/* <AiFillHeart />  */}
              REMOVE FROM WISHLIST
            </div>
          ) : (
            <div onClick={handleAddToWishList}>
              {/* <AiOutlineHeart /> */}
              ADD TO WISHLIST
            </div>
          )}
        </div>
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
  isAdded: PropTypes.bool.isRequired,
};

WishItem.defaultProps = {
  handleAddToWishList: () => {},
  handleRemoveToWishList: () => {},
  isAdded: false,
  isSmallComponent: true,
};
