import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FcLike } from "react-icons/fc";
import * as actions from "../constant/actionTypes";
import withAuthorization from "../session/withAuthorization";
import { Link } from "react-router-dom";
import FirebaseContext from "./../firebase/FirebaseContext";

const WishItemList = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  const dispatch = useDispatch();
  const [wishData, setwishData] = useState([]);

  const getItemInWishList = () => {
    if (authUser != null) {
      firebase.getWishListData(authUser.authUser.uid).then((snapshot) => {
        const wishProducts = snapshot.val();
        for (let i in wishProducts) {
          setwishData((items) => [...items, wishProducts[i]]);
        }
      });
      dispatch({
        type: actions.REFRESH_WISH_LIST,
        payload: wishData,
      });
    }
  };
  useEffect(() => {
    getItemInWishList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const WishListOperations = (id) => {
    firebase.deleteWishItem(authUser.authUser.uid, id);
    if (wishData != null && wishData.length > 0) {
      const newWishData = wishData.filter((item) => {
        return item.id !== id;
      });
      setwishData(newWishData);
    } else {
      setwishData([]);
    }
    dispatch({
      type: actions.REMOVE_FROM_WISH_LIST,
      payload: id,
    });
  };

  return (
    <div className="flex flex-col product-list-container">
      <h1>Wish List</h1>
      <hr />
      {wishData.length > 0 ? (
        <div className="product-list">
          {wishData.map(({ id, image, title, price }) => (
            <div key={id} className="product-card-container">
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
              <div className="wishitem">
                <h3 className="font-normal">$ {price}</h3>
                <div onClick={() => WishListOperations(id)}>
                  <FcLike />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-cart-message">
          You didn't added any items in Wishlist.
        </div>
      )}
    </div>
  );
};

export default withAuthorization(WishItemList);
