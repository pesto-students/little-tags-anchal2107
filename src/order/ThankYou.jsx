import React from "react";
import { FiSmile } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ThankYou.scss";

const ThankYou = () => {
  return (
    <div className="app thank-you">
      <FiSmile />
      <h1>Thank you for shopping with us.</h1>
      <Link to="/home">
        <button value="Continue Shopping">Continue Shopping</button>
      </Link>
    </div>
  );
};

export default ThankYou;
