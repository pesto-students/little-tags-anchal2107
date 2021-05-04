import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrClose } from "react-icons/gr";
import * as actions from "../constant/actionTypes";
import { SHIP_DETAILS } from "./../constant/Routes";
import withAuthorization from "./../session/withAuthorization";
import { Link } from "react-router-dom";
import "./Cart.scss";

function Cart() {
  const { products, totalQuantity, totalPrice } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div className="title">Your Cart</div>
      {products.length > 0 ? (
        <div className="cart-div-container">
          <div className="shopping-cart">
            {products.map(({ id, image, title, size, price, quantity }) => (
              <div key={id} className="item">
                <div
                  className="buttons"
                  onClick={() =>
                    dispatch({
                      type: actions.REMOVE_FROM_CART,
                      payload: id,
                    })
                  }
                >
                  <GrClose />
                </div>

                <div className="cart-product-image">
                  <img src={image} alt="product" height="100" width="100" />
                </div>

                <div className="description">
                  <span className="font-size-13">{title}</span>
                  <span>Size: {size}</span>
                </div>

                <div className="quantity">
                  <button
                    className="minus-btn"
                    type="button"
                    name="button"
                    onClick={() =>
                      dispatch({
                        type: actions.DECRESE_QUANTITY,
                        payload: id,
                      })
                    }
                  >
                    -
                  </button>
                  <span className="quantity-number font-size-13">
                    {quantity}
                  </span>
                  <button
                    className="plus-btn"
                    type="button"
                    name="button"
                    onClick={() =>
                      dispatch({
                        type: actions.INCRESE_QUANTITY,
                        payload: id,
                      })
                    }
                  >
                    +
                  </button>
                </div>

                <div className="total-price font-size-13">$ {price}</div>
              </div>
            ))}
          </div>
          <div className="summary">
            <div className="summary-heading">SUMMARY</div>
            <div className="summary-details">
              <div className="row mb-10">
                <div className="col-6">Total Items:</div>
                <div className="col-6">{totalQuantity}</div>
              </div>
              <div className="row mb-10">
                <div className="col-6">Total Price</div>
                <div className="col-6">
                  ${parseFloat(totalPrice).toFixed(2)}
                </div>
              </div>
              <Link to={SHIP_DETAILS}>
                <button type="button" className="checkout">
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart-message">Your cart is currently empty!</div>
      )}
    </div>
  );
}

export default withAuthorization(Cart);
