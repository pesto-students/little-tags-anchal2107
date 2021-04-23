import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./OrderCard.scss";

const OrderCard = ({ title, price, date, image, productId }) => {
  return (
    <div className="flex order-card">
      <div>
        <img src={image} alt="ordered product" height="150" width="150" />
      </div>
      <div className="flex flex-col flex-1 order-description">
        <h2 className="font-bold">{title}</h2>
        <h3 className="font-bold">$ {price}</h3>
        <h3 className="font-normal">{date}</h3>
      </div>
      <Link to={`/product/${productId}`}>
        <div className="mr-2">
          <button className="order-again" value="Order Again">
            Order Again
          </button>
        </div>
      </Link>
    </div>
  );
};

export default OrderCard;

OrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
};

OrderCard.defaultProps = {
  title: "",
  price: 0,
  date: "",
  image: "",
  productId: 1,
};
