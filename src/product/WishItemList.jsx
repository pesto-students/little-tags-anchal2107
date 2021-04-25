import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { AiFillHeart } from "react-icons/ai";
import * as actions from "../constant/actionTypes";
import withAuthorization from "../session/withAuthorization";
import { Link } from "react-router-dom";
import "./WishItemList.scss";
const WishItemList = () => {
  const { products } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>I a min wishItemList page</h1>
      {products.length > 0 ? (
        <div>
          <div className="cart-div-container">
            <div className="shopping-cart">
              {products.map((product) => (
                <div key={product.id} className="item">
                  <div
                    className="buttons"
                    onClick={() =>
                      dispatch({
                        type: actions.REMOVE_FROM_CART,
                        payload: product.id,
                      })
                    }
                  ></div>

                  <div className="cart-product-image">
                    <img
                      src={product.image}
                      alt="product"
                      height="100"
                      width="100"
                    />
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
export default WishItemList;
