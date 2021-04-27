import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FcLike } from "react-icons/fc";
import * as actions from "../constant/actionTypes";
import withAuthorization from "../session/withAuthorization";
import { Link } from "react-router-dom";
import "./WishItemList.scss";
import FirebaseContext from "./../firebase/FirebaseContext";

const WishItemList = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  let { products } = useSelector((state) => state.wishReducer);
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
  }, []);

  const WishListOperations = (id) => {  
      firebase.deleteWishItem(authUser.authUser.uid, id);  
      if (wishData != null && wishData.length>0)  
      {
        const newWishData = wishData.filter((item)=>{return item.id !== id});
        setwishData(newWishData);
      }
      else
      {
        setwishData([]);
      }
      dispatch({
        type: actions.REMOVE_FROM_WISH_LIST,
        payload: id,
      });   
  };

  return (
    <div>
      {wishData.length > 0 ? (
        <div>
          <div className="cart-div-container">
            <div className="shopping-cart">
              {wishData.map((product) => (
                <div key={product.id} className="item">
                  <div
                    className="buttons"
                    onClick={() => WishListOperations(product.id)}
                  >
                    <FcLike />
                  </div>
                  <div className="cart-product-image">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt="product"
                        height="100"
                        width="100"
                      />{" "}
                    </Link>
                  </div>
                  <div className="description">
                    <span>{product.title}</span>
                    <span>Size: {product.size}</span>
                  </div>
                  <div className="total-price">$ {product.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart-message">No Wish List!</div>
      )}
    </div>
  );
};
export default withAuthorization(WishItemList);
