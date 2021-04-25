import "./WishItem.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import withAuthorization from "./../session/withAuthorization";

const WishItem = ({ isSmallComponent, isAdded, productId }) => {
  console.log(` wish list small:${isSmallComponent} and added ${isAdded}`);

  if (isSmallComponent) {
    return (
      <div>
        {isAdded? <FcLike />
        :<FcLikePlaceholder />}
      </div>
    );
  } else {
    return (
      <div className="wishList-Big-container mt-1">
        {isAdded ? (
          <div>
            <AiFillHeart /> Remove From WishList
          </div>
        ) : (
          <div>
            <AiOutlineHeart />
            Add To WishList
          </div>
        )}
      </div>
    );
  }
};
export default WishItem;
//export default withAuthorization(WishItem);