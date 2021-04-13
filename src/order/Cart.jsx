import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsDash, BsPlus } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import * as actions from "../constant/actionTypes";
import "./Cart.scss";

function Cart() {
  const { products, totalQuantity, totalPrice } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h3>Your cart</h3>
        {products.length > 0 ? (
          <>
            <div className="cart-card-container">
              <div className="flex flex-col flex-1">
                <div>
                  <div className="flex flex-1 space-between">
                    <div>Picture</div>
                    <div>Name</div>
                    <div>Price</div>
                    <div>Inc/Dec</div>
                    <div>Total Price</div>
                    <div>Remove</div>
                  </div>
                </div>
                {products.map((product) => (
                  <div key={product.id} className="flex space-between">
                    <div>
                      <div>
                        <img src={product.image} alt="product_image" height="100" width="100"/>
                      </div>
                    </div>
                    <div>
                      <div>{product.title}</div>
                    </div>
                    <div>
                      <div>$ {product.price}</div>
                    </div>
                    <div>
                      <div>
                        <div>
                          <span
                            onClick={() =>
                              dispatch({
                                type: actions.DECRESE_QUANTITY,
                                payload: product.id,
                              })
                            }
                          >
                            <BsDash />
                          </span>
                          <span className="quantity">{product.quantity}</span>
                          <span
                            onClick={() =>
                              dispatch({
                                type: actions.INCRESE_QUANTITY,
                                payload: product.id,
                              })
                            }
                          >
                            <BsPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>$ {product.price * product.quantity}</div>
                    </div>
                    <div>
                      <div
                        onClick={() =>
                          dispatch({
                            type: actions.REMOVE_FROM_CART,
                            payload: product.id,
                          })
                        }
                      >
                        <MdDelete />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div>
                  <div>Summary</div>
                  <div>
                    <div>
                      <div>Total Items:</div>
                      <div>{totalQuantity}</div>
                    </div>
                    <div>
                      <div>Total Price</div>
                      <div>${totalPrice}</div>
                    </div>
                    <button type="button">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your cart is currently empty!"
        )}
      </div>
    </div>
  );
}

export default Cart;
