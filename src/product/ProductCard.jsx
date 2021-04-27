import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import WishItem from "./WishItem";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../constant/actionTypes";
import FirebaseContext from "./../firebase/FirebaseContext";
function ProductCard({ id, title, image, price }) {
  const dispatch = useDispatch();
  const [isWishAdded, setIsWishAdded] = useState(false);
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  useEffect(() => {
    isItemInWishList();
    dispatch({ type: actions.PRODUCT, id });
  }, [dispatch, id]);
  const size = useState("xs");
  const product = {
    id,
    title,
    image,
    price,
  };

  const WishListOperations = (doAddToWishList) => {
    if (authUser != null && authUser.authUser != null) {
      if (doAddToWishList) {
        return () => {
          firebase.updateWishItem(authUser.authUser.uid, product);
          setIsWishAdded(true);
          dispatch({
            type: actions.ADD_TO_WISH_LIST,
            payload: { product, size },
          });
        };
      } else {
        return () => {
          firebase.deleteWishItem(authUser.authUser.uid, id);
          setIsWishAdded(false);
          dispatch({
            type: actions.REMOVE_FROM_WISH_LIST,
            payload: id,
          });
        };
      }
    }
    // pop up sign in model
  };
  const isItemInWishList = () => {
    if (authUser != null && authUser.authUser != null) {
      console.log(` isItemInWishList ${JSON.stringify(id)}`);
      firebase.getWishListData(authUser.authUser.uid).then((snapshot) => {
        const wishProducts = snapshot.val();
        for (let i in wishProducts) {
          if (i === id) {
            setIsWishAdded(true);
            return true;
          }
        }
      });
    }
    setIsWishAdded(false);
    return false;
  };

  return (
    <>
      <div id={id} className="product-card-container">
        <Link to={`/product/${id}`}>
          <div>
            <img src={image} alt="product" height="330" />
          </div>
          <div>
            <h3 className="overflow" title={title}>
              {title}
            </h3>
          </div>
        </Link>
        <div className="wishItem">
          <h3 className="font-normal">$ {price}</h3>
          <div>
            <WishItem
              isSmallComponent={true}
              isAdded={isWishAdded}
              handleAddToWishList={WishListOperations(true)}
              handleRemoveToWishList={WishListOperations(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

ProductCard.defaultProps = {
  title: "",
  image: "",
  price: "",
};
