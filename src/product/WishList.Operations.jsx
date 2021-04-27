import { useContext } from "react";
import FirebaseContext from "./../firebase/FirebaseContext";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../constant/actionTypes";

const WishListOperations = (isAddToWishList) => {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  const dispatch = useDispatch();
  if (isAddToWishList) {
    return (product, size) => {
      firebase.setOrderData(authUser.authUser.uid, product);
      dispatch({
        type: actions.ADD_TO_WISH_LIST,
        payload: { product, size },
      });
    };
  } else {
    return (id) =>
      dispatch({
        type: actions.REMOVE_FROM_WISH_LIST,
        payload: id,
      });
  }
};
export default WishListOperations;
